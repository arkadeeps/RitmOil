
import React from 'react';
import ImageSlideshow from './ImageSlideshow';
import { useLanguage } from '../contexts/LanguageContext';
import { heroImgs } from '../img/heroImgs/heroImg'


const HeroSection = () => {
  const { t } = useLanguage();
  
  const heroImages = Object.values(heroImgs);

  return (
    <section className="relative">
      <div className="h-[600px] relative">
        <ImageSlideshow 
          images={heroImages as string[]}
          className="h-full"
          autoPlay={true}
          interval={6000}
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('hero.title') || 'Welcome to Ritm Oil LLP'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              {t('hero.subtitle') || 'Leading provider of comprehensive oil industry services across Kazakhstan'}
            </p>
            <div className="space-x-4 animate-fade-in">
              <a
                href="/about/mission"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('common.learn_more') || 'Learn More'}
              </a>
              <a
                href="/contacts"
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('common.contact_us') || 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
