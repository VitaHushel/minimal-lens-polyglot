import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Import blog images
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

  return (
    <section 
      id="blog" 
      ref={sectionRef}
      className="py-20 lg:py-32 section-gradient"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blog.posts.map((post, index) => (
            <Card
              key={index}
              className={`group overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 border-0 bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Blog Post Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blogImages[index]}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <CardContent className="p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-accent rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-elegant font-semibold text-primary mb-3 line-clamp-2 group-hover:text-charcoal transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-charcoal font-medium group/btn"
                  aria-label={`Read more about ${post.title}`}
                >
                  {t.blog.readMore}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Blog Posts Button */}
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