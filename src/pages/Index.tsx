import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { PricesSection } from '../components/sections/PricesSection';
import { BookingSection } from '../components/sections/BookingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { BlogSection } from '../components/sections/BlogSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <PricesSection />
          <BookingSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
