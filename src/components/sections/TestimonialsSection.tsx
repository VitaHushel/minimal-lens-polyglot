import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Chen",
    role: "Wedding Clients",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Elena captured our wedding day perfectly! Every photo tells a story, and her attention to detail is incredible. She made us feel so comfortable and natural. We couldn't be happier with the results!",
    occasion: "Garden Wedding, June 2024"
  },
  {
    id: 2,
    name: "Jessica Rodriguez",
    role: "Portrait Client",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "I was nervous about my headshot session, but Elena's warm personality put me at ease immediately. The photos exceeded my expectations - professional yet natural. Highly recommend!",
    occasion: "Professional Headshots, March 2024"
  },
  {
    id: 3,
    name: "The Johnson Family",
    role: "Family Session",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Elena has such a gift for capturing genuine moments. Our family photos are absolutely beautiful, and she managed to get perfect shots even with our energetic twins! Amazing patience and skill.",
    occasion: "Family Portrait Session, August 2024"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Corporate Event",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Elena provided exceptional event photography for our company celebration. Professional, unobtrusive, and the quality of work is outstanding. We'll definitely book her again!",
    occasion: "Corporate Anniversary, October 2024"
  },
  {
    id: 5,
    name: "Maria & John Williams",
    role: "Maternity Session",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Elena made our maternity session so special and comfortable. The photos are artistic and emotional - exactly what we hoped for. We can't wait to book her for our newborn session!",
    occasion: "Maternity Photography, September 2024"
  }
];

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-elegant font-semibold text-primary mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm-beige rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.occasion}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Ready to create your own beautiful memories?
          </p>
          <button
            onClick={() => {
              const bookingSection = document.querySelector('#booking') as HTMLElement;
              if (bookingSection) {
                const offset = 80;
                const elementPosition = bookingSection.offsetTop - offset;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="text-primary hover:text-primary/80 font-medium underline transition-colors"
          >
            Book Your Session Today
          </button>
        </div>
      </div>
    </section>
  );
};