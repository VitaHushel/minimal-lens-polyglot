// Language types and content for multilingual support
export type Language = 'en' | 'uk' | 'pl';

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    prices: string;
    booking: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  prices: {
    title: string;
    subtitle: string;
    packages: {
      wedding: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      portrait: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      family: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
      event: {
        title: string;
        price: string;
        description: string;
        features: string[];
      };
    };
  };
  booking: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      serviceType: string;
      date: string;
      time: string;
      message: string;
      submit: string;
      servicePlaceholder: string;
      services: {
        wedding: string;
        portrait: string;
        family: string;
        event: string;
        maternity: string;
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    social: {
      whatsapp: string;
      telegram: string;
      instagram: string;
    };
  };
  footer: {
    copyright: string;
    backToTop: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      prices: "Prices",
      booking: "Booking",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    hero: {
      title: "Elena Kowalski",
      subtitle: "Capturing Life's Most Precious Moments with Artistic Elegance",
      cta: "Book Your Session Now"
    },
    about: {
      title: "About Me",
      content: "With over 8 years of experience in professional photography, I specialize in capturing authentic emotions and timeless moments. My passion lies in creating beautiful, natural images that tell your unique story. From intimate weddings to family portraits, I bring a warm, professional approach to every session, ensuring you feel comfortable and confident in front of the camera."
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "A glimpse into my world of photography"
    },
    prices: {
      title: "Photography Packages",
      subtitle: "Professional photography services tailored to your needs",
      packages: {
        wedding: {
          title: "Wedding Photography",
          price: "$2,500",
          description: "Complete wedding day coverage",
          features: [
            "8-10 hours of coverage",
            "500+ edited photos",
            "Online gallery",
            "Engagement session included",
            "Print release"
          ]
        },
        portrait: {
          title: "Portrait Session",
          price: "$350",
          description: "Professional headshots and portraits",
          features: [
            "1-hour session",
            "25+ edited photos",
            "Online gallery",
            "Wardrobe consultation",
            "Makeup touch-ups"
          ]
        },
        family: {
          title: "Family Photography",
          price: "$450",
          description: "Beautiful family memories",
          features: [
            "1.5-hour session",
            "40+ edited photos",
            "Online gallery",
            "Multiple outfit changes",
            "Location of choice"
          ]
        },
        event: {
          title: "Event Photography",
          price: "$1,200",
          description: "Corporate and special events",
          features: [
            "4-6 hours of coverage",
            "200+ edited photos",
            "Online gallery",
            "Same-day preview",
            "Rush delivery available"
          ]
        }
      }
    },
    booking: {
      title: "Book Your Session",
      subtitle: "Let's create beautiful memories together",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        serviceType: "Service Type",
        date: "Preferred Date",
        time: "Preferred Time",
        message: "Message (Optional)",
        submit: "Send Booking Request",
        servicePlaceholder: "Select a service",
        services: {
          wedding: "Wedding Photography",
          portrait: "Portrait Session",
          family: "Family Photography",
          event: "Event Photography",
          maternity: "Maternity Photography"
        }
      }
    },
    testimonials: {
      title: "What Clients Say",
      subtitle: "Stories from families and couples I've had the joy to photograph"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to capture your special moments?",
      address: "123 Photography Lane, Creative District, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "hello@elenakowalski.com",
      social: {
        whatsapp: "Message on WhatsApp",
        telegram: "Contact via Telegram",
        instagram: "Follow on Instagram"
      }
    },
    footer: {
      copyright: "© 2024 Elena Kowalski Photography. All rights reserved.",
      backToTop: "Back to top"
    },
    meta: {
      title: "Elena Kowalski - Professional Photographer",
      description: "Professional photographer specializing in weddings, portraits, and family photography. Capturing your precious moments with artistic elegance."
    }
  },
  uk: {
    nav: {
      home: "Головна",
      about: "Про мене",
      portfolio: "Портфоліо",
      prices: "Ціни",
      booking: "Бронювання",
      testimonials: "Відгуки",
      contact: "Контакти"
    },
    hero: {
      title: "Елена Ковальська",
      subtitle: "Захоплюю найцінніші моменти життя з художньою елегантністю",
      cta: "Забронювати сесію"
    },
    about: {
      title: "Про мене",
      content: "Маючи понад 8 років досвіду у професійній фотографії, я спеціалізуюся на захопленні справжніх емоцій та безчасних моментів. Моя пристрасть полягає у створенні красивих, природних зображень, які розповідають вашу унікальну історію. Від інтимних весіль до сімейних портретів, я приношу теплий, професійний підхід до кожної сесії, забезпечуючи ваш комфорт та впевненість перед камерою."
    },
    portfolio: {
      title: "Портфоліо",
      subtitle: "Погляд у мій світ фотографії"
    },
    prices: {
      title: "Фотографічні пакети",
      subtitle: "Професійні фотографічні послуги, адаптовані до ваших потреб",
      packages: {
        wedding: {
          title: "Весільна фотографія",
          price: "$2,500",
          description: "Повне покриття весільного дня",
          features: [
            "8-10 годин зйомки",
            "500+ оброблених фото",
            "Онлайн-галерея",
            "Сесія заручин включена",
            "Ліцензія на друк"
          ]
        },
        portrait: {
          title: "Портретна сесія",
          price: "$350",
          description: "Професійні портрети та хедшоти",
          features: [
            "1-годинна сесія",
            "25+ оброблених фото",
            "Онлайн-галерея",
            "Консультація по гардеробу",
            "Ретуш макіяжу"
          ]
        },
        family: {
          title: "Сімейна фотографія",
          price: "$450",
          description: "Прекрасні сімейні спогади",
          features: [
            "1.5-годинна сесія",
            "40+ оброблених фото",
            "Онлайн-галерея",
            "Кілька змін одягу",
            "Локація на вибір"
          ]
        },
        event: {
          title: "Подієва фотографія",
          price: "$1,200",
          description: "Корпоративні та спеціальні події",
          features: [
            "4-6 годин зйомки",
            "200+ оброблених фото",
            "Онлайн-галерея",
            "Прев'ю в той же день",
            "Експрес-доставка доступна"
          ]
        }
      }
    },
    booking: {
      title: "Забронювати сесію",
      subtitle: "Давайте створимо прекрасні спогади разом",
      form: {
        name: "Повне ім'я",
        email: "Електронна пошта",
        phone: "Номер телефону",
        serviceType: "Тип послуги",
        date: "Бажана дата",
        time: "Бажаний час",
        message: "Повідомлення (Необов'язково)",
        submit: "Відправити запит на бронювання",
        servicePlaceholder: "Оберіть послугу",
        services: {
          wedding: "Весільна фотографія",
          portrait: "Портретна сесія",
          family: "Сімейна фотографія",
          event: "Подієва фотографія",
          maternity: "Фотографія вагітності"
        }
      }
    },
    testimonials: {
      title: "Що кажуть клієнти",
      subtitle: "Історії від сімей та пар, яких мені довелося фотографувати з радістю"
    },
    contact: {
      title: "Зв'яжіться зі мною",
      subtitle: "Готові зафіксувати ваші особливі моменти?",
      address: "вул. Фотографічна, 123, Творчий район, Нью-Йорк, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "hello@elenakowalski.com",
      social: {
        whatsapp: "Написати в WhatsApp",
        telegram: "Зв'язатися через Telegram",
        instagram: "Підписатися в Instagram"
      }
    },
    footer: {
      copyright: "© 2024 Елена Ковальська Фотографія. Всі права захищені.",
      backToTop: "Повернутися наверх"
    },
    meta: {
      title: "Елена Ковальська - Професійний фотограф",
      description: "Професійний фотограф, що спеціалізується на весільній, портретній та сімейній фотографії. Захоплюю ваші дорогоцінні моменти з художньою елегантністю."
    }
  },
  pl: {
    nav: {
      home: "Główna",
      about: "O mnie",
      portfolio: "Portfolio",
      prices: "Cennik",
      booking: "Rezerwacja",
      testimonials: "Opinie",
      contact: "Kontakt"
    },
    hero: {
      title: "Elena Kowalski",
      subtitle: "Uwiecznianie najcenniejszych życiowych chwil z artystyczną elegancją",
      cta: "Zarezerwuj sesję"
    },
    about: {
      title: "O mnie",
      content: "Z ponad 8-letnim doświadczeniem w fotografii profesjonalnej, specjalizuję się w uchwyceniu autentycznych emocji i ponadczasowych momentów. Moją pasją jest tworzenie pięknych, naturalnych obrazów, które opowiadają Twoją wyjątkową historię. Od intymnych ślubów po portrety rodzinne, wnoszę ciepłe, profesjonalne podejście do każdej sesji, zapewniając komfort i pewność siebie przed kamerą."
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Spojrzenie w mój świat fotografii"
    },
    prices: {
      title: "Pakiety fotograficzne",
      subtitle: "Profesjonalne usługi fotograficzne dostosowane do Twoich potrzeb",
      packages: {
        wedding: {
          title: "Fotografia ślubna",
          price: "$2,500",
          description: "Pełne pokrycie dnia ślubu",
          features: [
            "8-10 godzin sesji",
            "500+ obrobionych zdjęć",
            "Galeria online",
            "Sesja narzeczeńska wliczona",
            "Licencja do druku"
          ]
        },
        portrait: {
          title: "Sesja portretowa",
          price: "$350",
          description: "Profesjonalne portrety i zdjęcia biznesowe",
          features: [
            "1-godzinna sesja",
            "25+ obrobionych zdjęć",
            "Galeria online",
            "Konsultacja stylistyczna",
            "Korekta makijażu"
          ]
        },
        family: {
          title: "Fotografia rodzinna",
          price: "$450",
          description: "Piękne rodzinne wspomnienia",
          features: [
            "1,5-godzinna sesja",
            "40+ obrobionych zdjęć",
            "Galeria online",
            "Kilka zmian stylizacji",
            "Lokalizacja do wyboru"
          ]
        },
        event: {
          title: "Fotografia eventowa",
          price: "$1,200",
          description: "Wydarzenia korporacyjne i specjalne",
          features: [
            "4-6 godzin sesji",
            "200+ obrobionych zdjęć",
            "Galeria online",
            "Podgląd tego samego dnia",
            "Ekspresowa dostawa dostępna"
          ]
        }
      }
    },
    booking: {
      title: "Zarezerwuj sesję",
      subtitle: "Stwórzmy razem piękne wspomnienia",
      form: {
        name: "Imię i nazwisko",
        email: "Adres e-mail",
        phone: "Numer telefonu",
        serviceType: "Typ usługi",
        date: "Preferowana data",
        time: "Preferowana godzina",
        message: "Wiadomość (Opcjonalnie)",
        submit: "Wyślij prośbę o rezerwację",
        servicePlaceholder: "Wybierz usługę",
        services: {
          wedding: "Fotografia ślubna",
          portrait: "Sesja portretowa",
          family: "Fotografia rodzinna",
          event: "Fotografia eventowa",
          maternity: "Fotografia ciążowa"
        }
      }
    },
    testimonials: {
      title: "Co mówią klienci",
      subtitle: "Historie od rodzin i par, które miałam radość fotografować"
    },
    contact: {
      title: "Skontaktuj się",
      subtitle: "Gotowi uwiecznić swoje wyjątkowe chwile?",
      address: "ul. Fotograficzna 123, Dzielnica Kreatywna, Nowy Jork, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "hello@elenakowalski.com",
      social: {
        whatsapp: "Napisz na WhatsApp",
        telegram: "Skontaktuj się przez Telegram",
        instagram: "Śledź na Instagram"
      }
    },
    footer: {
      copyright: "© 2024 Elena Kowalski Photography. Wszystkie prawa zastrzeżone.",
      backToTop: "Powrót na górę"
    },
    meta: {
      title: "Elena Kowalski - Profesjonalny fotograf",
      description: "Profesjonalny fotograf specjalizujący się w fotografii ślubnej, portretowej i rodzinnej. Uwieczniam Twoje cenne chwile z artystyczną elegancją."
    }
  }
};