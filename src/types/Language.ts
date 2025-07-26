// Language types and content for multilingual support
export type Language = 'en' | 'uk' | 'pl';

export interface TranslationContent {
  name: string;
  nav: {
    home: string;
    about: string;
    portfolio: string;
    prices: string;
    booking: string;
    testimonials: string;
    blog: string;
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
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    posts: {
      title: string;
      excerpt: string;
      date: string;
      category: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      content: string;
    }[];
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
    name: "Vita Hushel",
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      prices: "Prices",
      booking: "Booking",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      title: "Vita Hushel",
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
    blog: {
      title: "Photography Blog",
      subtitle: "Tips, stories, and inspiration from behind the lens",
      readMore: "Read More",
      posts: [
        {
          title: "5 Tips for Perfect Wedding Photos",
          excerpt: "Discover the secrets to capturing magical wedding moments that couples will treasure forever.",
          date: "March 15, 2024",
          category: "Wedding"
        },
        {
          title: "The Art of Natural Light Photography",
          excerpt: "Learn how to use natural light to create stunning portraits that showcase your subject's personality.",
          date: "March 8, 2024",
          category: "Tutorial"
        },
        {
          title: "Family Photo Session Preparation Guide",
          excerpt: "Everything families need to know to prepare for a successful and fun photo session.",
          date: "February 28, 2024",
          category: "Family"
        }
      ]
    },
    testimonials: {
      title: "What Clients Say",
      subtitle: "Stories from families and couples I've had the joy to photograph",
      items: [
        {
          name: "Sarah & Michael",
          role: "Wedding Couple",
          content: "Elena captured our wedding day perfectly! Her attention to detail and ability to make us feel comfortable resulted in the most beautiful photos we could have dreamed of. Every single shot tells the story of our love."
        },
        {
          name: "Jessica Thompson",
          role: "Mother of Two",
          content: "Our family photo session with Elena was absolutely wonderful. She was so patient with our kids and managed to capture their personalities beautifully. We treasure these photos and will book with her again!"
        },
        {
          name: "David Rodriguez",
          role: "Corporate Executive",
          content: "Elena's professionalism and artistic eye made my headshot session a breeze. The photos she delivered exceeded my expectations and have opened many doors in my career. Highly recommend!"
        },
        {
          name: "Anna & James",
          role: "Expecting Parents",
          content: "Elena made our maternity shoot so special and comfortable. She guided us through every pose and captured the joy of this precious time in our lives. We can't wait to work with her for newborn photos!"
        }
      ]
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
      copyright: "© 2024 Vita Hushel Photography. All rights reserved.",
      backToTop: "Back to top"
    },
    meta: {
      title: "Vita Hushel - Professional Photographer",
      description: "Professional photographer specializing in weddings, portraits, and family photography. Capturing your precious moments with artistic elegance."
    }
  },
  uk: {
    name: "Віта Гушель",
    nav: {
      home: "Головна",
      about: "Про мене",
      portfolio: "Портфоліо",
      prices: "Ціни",
      booking: "Бронювання",
      testimonials: "Відгуки",
      blog: "Блог",
      contact: "Контакти"
    },
    hero: {
      title: "Віта Гушель",
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
    blog: {
      title: "Фотографічний блог",
      subtitle: "Поради, історії та натхнення з-за об'єктива",
      readMore: "Читати далі",
      posts: [
        {
          title: "5 порад для ідеальних весільних фото",
          excerpt: "Відкрийте секрети захоплення чарівних весільних моментів, які пари будуть берегти вічно.",
          date: "15 березня 2024",
          category: "Весілля"
        },
        {
          title: "Мистецтво фотографії в природному освітленні",
          excerpt: "Дізнайтеся, як використовувати природне світло для створення приголомшливих портретів.",
          date: "8 березня 2024",
          category: "Урок"
        },
        {
          title: "Підготовка до сімейної фотосесії",
          excerpt: "Все, що потрібно знати сім'ям для підготовки до успішної та веселої фотосесії.",
          date: "28 лютого 2024",
          category: "Сім'я"
        }
      ]
    },
    testimonials: {
      title: "Що кажуть клієнти",
      subtitle: "Історії від сімей та пар, яких мені довелося фотографувати з радістю",
      items: [
        {
          name: "Сара та Майкл",
          role: "Весільна пара",
          content: "Елена ідеально запечатала наш весільний день! Її увага до деталей і здатність заспокоїти нас призвели до найкрасивіших фотографій, про які ми могли мріяти. Кожен знімок розповідає історію нашого кохання."
        },
        {
          name: "Джесіка Томпсон",
          role: "Мама двох дітей",
          content: "Наша сімейна фотосесія з Еленою була просто чудовою. Вона була такою терплячою з нашими дітьми і зуміла прекрасно передати їх особистості. Ми дорожимо цими фото і знову забронюємо у неї!"
        },
        {
          name: "Девід Родрігес",
          role: "Корпоративний керівник",
          content: "Професіоналізм Елени та художнє око зробили мою фотосесію портретів легкою. Фотографії, які вона зробила, перевершили мої очікування і відкрили багато дверей у моїй кар'єрі. Дуже рекомендую!"
        },
        {
          name: "Анна та Джеймс",
          role: "Майбутні батьки",
          content: "Елена зробила нашу фотосесію вагітності такою особливою та комфортною. Вона провела нас через кожну позу і запечатала радість цього дорогоцінного часу в нашому житті. Не можемо дочекатися роботи з нею для фото новонародженого!"
        }
      ]
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
      copyright: "© 2024 Віта Гушель Фотографія. Всі права захищені.",
      backToTop: "Повернутися наверх"
    },
    meta: {
      title: "Віта Гушель - Професійний фотограф",
      description: "Професійний фотограф, що спеціалізується на весільній, портретній та сімейній фотографії. Захоплюю ваші дорогоцінні моменти з художньою елегантністю."
    }
  },
  pl: {
    name: "Wita Hushel",
    nav: {
      home: "Główna",
      about: "O mnie",
      portfolio: "Portfolio",
      prices: "Cennik",
      booking: "Rezerwacja",
      testimonials: "Opinie",
      blog: "Blog",
      contact: "Kontakt"
    },
    hero: {
      title: "Wita Hushel",
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
    blog: {
      title: "Blog fotograficzny",
      subtitle: "Porady, historie i inspiracje zza obiektywu",
      readMore: "Czytaj więcej",
      posts: [
        {
          title: "5 wskazówek do idealnych zdjęć ślubnych",
          excerpt: "Odkryj sekrety uwieczniania magicznych chwil ślubnych, które pary będą cenić na zawsze.",
          date: "15 marca 2024",
          category: "Ślub"
        },
        {
          title: "Sztuka fotografii w naturalnym świetle",
          excerpt: "Dowiedz się, jak wykorzystać naturalne światło do tworzenia oszałamiających portretów.",
          date: "8 marca 2024",
          category: "Poradnik"
        },
        {
          title: "Przewodnik przygotowania do sesji rodzinnej",
          excerpt: "Wszystko, co rodziny muszą wiedzieć, aby przygotować się do udanej i zabawnej sesji zdjęciowej.",
          date: "28 lutego 2024",
          category: "Rodzina"
        }
      ]
    },
    testimonials: {
      title: "Co mówią klienci",
      subtitle: "Historie od rodzin i par, które miałam radość fotografować",
      items: [
        {
          name: "Sarah & Michael",
          role: "Para młoda",
          content: "Elena idealnie uwieczniła nasz dzień ślubu! Jej dbałość o szczegóły i umiejętność wprowadzenia nas w komfortową atmosferę zaowocowały najpiękniejszymi zdjęciami, o których mogliśmy marzyć. Każde ujęcie opowiada historię naszej miłości."
        },
        {
          name: "Jessica Thompson",
          role: "Mama dwójki dzieci",
          content: "Nasza rodzinna sesja zdjęciowa z Eleną była absolutnie wspaniała. Była tak cierpliwa z naszymi dziećmi i zdołała pięknie uchwycić ich osobowości. Cenimy te zdjęcia i ponownie zarezerwujemy u niej sesję!"
        },
        {
          name: "David Rodriguez",
          role: "Dyrektor korporacyjny",
          content: "Profesjonalizm Eleny i artystyczne oko sprawiły, że moja sesja portretowa przebiegła bez problemu. Zdjęcia, które dostarczyła, przekroczyły moje oczekiwania i otworzyły wiele drzwi w mojej karierze. Gorąco polecam!"
        },
        {
          name: "Anna & James",
          role: "Przyszli rodzice",
          content: "Elena sprawiła, że nasza sesja ciążowa była tak wyjątkowa i komfortowa. Prowadziła nas przez każdą pozę i uwieczniła radość z tego cennego czasu w naszym życiu. Nie możemy się doczekać współpracy z nią przy zdjęciach noworodka!"
        }
      ]
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
      copyright: "© 2024 Wita Hushel Photography. Wszystkie prawa zastrzeżone.",
      backToTop: "Powrót na górę"
    },
    meta: {
      title: "Wita Hushel - Profesjonalny fotograf",
      description: "Profesjonalny fotograf specjalizujący się w fotografii ślubnej, portretowej i rodzinnej. Uwieczniam Twoje cenne chwile z artystyczną elegancją."
    }
  }
};