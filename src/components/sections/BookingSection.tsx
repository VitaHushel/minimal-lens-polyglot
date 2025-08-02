import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Calendar as CalendarIcon, Clock, Send } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { useToast } from '../../hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { cn } from '../../lib/utils';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: Date | undefined;
  time: string;
  message: string;
  honeypot: string; // Spam protection
}

interface GoogleFormData {
  'entry.815529139': string; // Full Name
  'entry.899621187': string; // Email
  'entry.743738326': string; // Phone Number
  'entry.133412522': string; // Service Type
  'entry.1820092030': string; // Message
  'entry.1044407857_hour': string; // Hour
  'entry.1044407857_minute': string; // Minute
  'entry.1405194602_year': string; // Year
  'entry.1405194602_month': string; // Month
  'entry.1405194602_day': string; // Day
}

export const BookingSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors }
  } = useForm<BookingFormData>();

  const selectedService = watch('serviceType');

  // Register serviceType and time fields for validation
  React.useEffect(() => {
    register('serviceType', { required: t.booking.form.validation.serviceRequired });
    register('time', { required: t.booking.form.validation.timeRequired });
  }, [register, t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: BookingFormData) => {
    // Honeypot spam protection
    if (data.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Starting form submission with data:', data);
      
      // Send to multiple endpoints for reliability
      const formattedDate = data.date ? format(data.date, 'yyyy-MM-dd') : '';
      const emailBody = `
Нове бронювання сесії

Ім'я: ${data.name}
Email: ${data.email}
Телефон: ${data.phone || 'Не вказано'}
Тип сесії: ${data.serviceType}
Дата: ${formattedDate}
Час: ${data.time}
Повідомлення: ${data.message || 'Не вказано'}
      `;

      // Method 1: Try EmailJS (most reliable)
      try {
        const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: 'default_service',
            template_id: 'template_booking',
            user_id: 'public_key_here',
            template_params: {
              to_email: 'vitahushelphoto@gmail.com',
              from_name: data.name,
              from_email: data.email,
              phone: data.phone,
              service_type: data.serviceType,
              date: formattedDate,
              time: data.time,
              message: data.message || '',
              subject: 'Нове бронювання сесії'
            }
          })
        });
        console.log('EmailJS response:', emailJSResponse.status);
      } catch (emailError) {
        console.error('EmailJS failed:', emailError);
      }

      // Method 2: Web3Forms (backup)
      try {
        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: 'your-web3forms-key-here',
            name: data.name,
            email: data.email,
            phone: data.phone,
            service: data.serviceType,
            date: formattedDate,
            time: data.time,
            message: data.message,
            to: 'vitahushelphoto@gmail.com',
            subject: 'Нове бронювання сесії'
          })
        });
        console.log('Web3Forms response:', web3Response.status);
      } catch (web3Error) {
        console.error('Web3Forms failed:', web3Error);
      }

      // Method 3: Google Forms with corrected entry IDs
      try {
        const googleForm = document.createElement('form');
        googleForm.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdTZICrSs1-Qt44scaUk0gQIuJH9gwzh9jxgAwt-Bysdjj3Cw/formResponse';
        googleForm.method = 'POST';
        googleForm.target = '_blank';
        
        // Create form fields with the exact entry names from your Google Form
        const formFields = [
          { name: 'entry.815529139', value: data.name },
          { name: 'entry.899621187', value: data.email },
          { name: 'entry.743738326', value: data.phone || '' },
          { name: 'entry.133412522', value: data.serviceType },
          { name: 'entry.1820092030', value: data.message || '' },
          { name: 'entry.1044407857', value: data.time },
          { name: 'entry.1405194602', value: formattedDate }
        ];

        formFields.forEach(({ name, value }) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          input.value = value;
          googleForm.appendChild(input);
        });

        document.body.appendChild(googleForm);
        googleForm.submit();
        setTimeout(() => document.body.removeChild(googleForm), 1000);
        
        console.log('Google Forms submitted');
      } catch (googleError) {
        console.error('Google Forms failed:', googleError);
      }

      // Method 4: Mailto fallback
      const mailtoLink = `mailto:vitahushelphoto@gmail.com?subject=Нове бронювання сесії&body=${encodeURIComponent(emailBody)}`;
      console.log('Mailto fallback created:', mailtoLink);

      toast({
        title: "Заявка відправлена!",
        description: "Дякую за ваш інтерес. Я зв'яжуся з вами протягом 24 годин.",
      });
      
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback to direct email
      const emailBody = `
Нове бронювання сесії

Ім'я: ${data.name}
Email: ${data.email}
Телефон: ${data.phone || 'Не вказано'}
Тип сесії: ${data.serviceType}
Дата: ${data.date ? format(data.date, 'yyyy-MM-dd') : 'Не вказано'}
Час: ${data.time}
Повідомлення: ${data.message || 'Не вказано'}
      `;
      
      const mailtoLink = `mailto:vitahushelphoto@gmail.com?subject=Нове бронювання сесії&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink);
      
      toast({
        title: "Відкрито email клієнт",
        description: "Будь ласка, відправте email вручну або спробуйте пізніше.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  return (
    <section 
      id="booking" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-cream"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-elegant font-semibold text-primary mb-4">
              {t.booking.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.booking.subtitle}
            </p>
          </div>

          {/* Booking Form */}
          <div 
            className={`bg-card rounded-lg shadow-medium p-6 lg:p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                {...register('honeypot')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t.booking.form.name} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    className="form-input"
                    placeholder="Name "
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t.booking.form.email} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="form-input"
                    placeholder="hanna@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t.booking.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="form-input"
                    placeholder="+48 791 613 941"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="serviceType" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t.booking.form.serviceType} *
                  </label>
                  <Select onValueChange={(value) => setValue('serviceType', value)}>
                    <SelectTrigger id="serviceType" className="form-input">
                      <SelectValue placeholder={t.booking.form.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">{t.booking.form.services.wedding}</SelectItem>
                      <SelectItem value="portrait">{t.booking.form.services.portrait}</SelectItem>
                      <SelectItem value="family">{t.booking.form.services.family}</SelectItem>
                      <SelectItem value="children">{t.booking.form.services.children}</SelectItem>
                      <SelectItem value="event">{t.booking.form.services.event}</SelectItem>
                      <SelectItem value="studio">{t.booking.form.services.studio}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-destructive text-xs mt-1">{t.booking.form.validation.serviceRequired}</p>
                  )}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    <CalendarIcon className="w-4 h-4 inline mr-1" />
                    {t.booking.form.date} *
                  </label>
                  <Controller
                    name="date"
                    control={control}
                    rules={{ required: t.booking.form.validation.dateRequired }}
                    render={({ field }) => (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "form-input justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    )}
                  />
                  {errors.date && (
                    <p className="text-destructive text-xs mt-1">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="time" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    <Clock className="w-4 h-4 inline mr-1" />
                    {t.booking.form.time} *
                  </label>
                  <Select onValueChange={(value) => setValue('time', value)}>
                    <SelectTrigger id="time" className="form-input">
                      <SelectValue placeholder={t.booking.form.timePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && (
                    <p className="text-destructive text-xs mt-1">{t.booking.form.validation.timeRequired}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t.booking.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="form-input resize-none"
                  placeholder="Tell me more about your vision, location preferences, or any special requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 font-medium"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {t.booking.form.submit}
                    </div>
                  )}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                {t.booking.form.agreement}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
