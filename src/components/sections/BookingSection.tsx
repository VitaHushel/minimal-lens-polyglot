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
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking Request Sent!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact me directly.",
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
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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
                    placeholder="+1 (555) 123-4567"
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
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder={t.booking.form.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">{t.booking.form.services.wedding}</SelectItem>
                      <SelectItem value="portrait">{t.booking.form.services.portrait}</SelectItem>
                      <SelectItem value="family">{t.booking.form.services.family}</SelectItem>
                      <SelectItem value="event">{t.booking.form.services.event}</SelectItem>
                      <SelectItem value="maternity">{t.booking.form.services.maternity}</SelectItem>
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
                    <SelectTrigger className="form-input">
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