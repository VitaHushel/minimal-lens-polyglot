import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { useLanguage } from '../contexts/LanguageContext';

const Booking: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
              {t.nav.booking}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Заповніть форму нижче, щоб забронювати фотосесію
            </p>
          </div>
        </section>

        {/* Google Form Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-elegant font-semibold text-foreground mb-6 text-center">
                    Форма бронювання
                  </h2>
                  
                  {/* Google Form Embed */}
                  <div className="relative w-full" style={{ paddingBottom: '100%', minHeight: '600px' }}>
                    <iframe
                      src="https://docs.google.com/forms/d/e/11_mmY_9vRRtkFHBq5YYNOBJe1CIFAUWHgWU0Fl4FCXo/viewform?embedded=true"
                      className="absolute top-0 left-0 w-full h-full border-0"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Форма бронювання"
                    >
                      Завантаження...
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Booking;