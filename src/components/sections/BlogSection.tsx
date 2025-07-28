import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Calendar, ArrowRight } from 'lucide-react';

// Імпорт зображень для постів
import weddingTips from '../../assets/blog/wedding-tips.jpg';
import naturalLight from '../../assets/blog/natural-light.jpg';
import familyGuide from '../../assets/blog/family-guide.jpg';

const blogImages = [weddingTips, naturalLight, familyGuide];

export const BlogSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
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

  const posts = [
    {
      title: "Основи фотографії для початківців",
      slug: "post1",
      excerpt: "Фотографія — це мистецтво і техніка одночасно. У цій статті ми розглянемо базові поняття...",
      date: "28 липня 2025",
      category: "Фотографія",
    },
    {
      title: "Поради з весільної фотографії",
      slug: "post2",
      excerpt: "Як зловити найкращі моменти на весіллі? Розглянемо корисні техніки та поради...",
      date: "15 липня 2025",
      category: "Весілля",
    },
    {
      title: "Сімейні фотосесії: секрети успіху",
      slug: "post3",
      excerpt: "Створення теплих і живих фотографій для сім’ї — важливе завдання. Ось кілька ідей для натхнення...",
      date: "10 липня 2025",
      category: "Сім’я",
    },
  ];

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-20 lg:py-32 section-gradient"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-elegant font-semibold text-primary mb-4">
            {t.blog.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className={`group overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 border-0 bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blogImages[index]}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-accent rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-elegant font-semibold text-primary mb-3 line-clamp-2 group-hover:text-charcoal transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}.html`}
                  className="inline-flex items-center text-primary hover:text-charcoal font-medium"
                  aria-label={`Read more about ${post.title}`}
                >
                  {t.blog.readMore}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link to="/blog">
            <Button
              variant="outline"
              size="lg"
              className="hero-button px-8 py-3 text-primary hover:text-primary-foreground border-primary hover:bg-primary"
            >
              {t.blog.viewAllPosts || 'View All Posts'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
