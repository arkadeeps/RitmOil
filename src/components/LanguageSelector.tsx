import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import flagEn from '../img/lang_en.png';
import flagRu from '../img/lang_ru.png';
import flagKz from '../img/lang_kz.png';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as Language, name: 'English', flag: flagEn },
    { code: 'ru' as Language, name: 'Русский', flag: flagRu },
    { code: 'kz' as Language, name: 'Қазақ', flag: flagKz }
  ];

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage && languages.some(lang => lang.code === storedLanguage)) {
      if (storedLanguage !== currentLanguage) {
        setLanguage(storedLanguage as Language);
      }
    }
  }, []);

  const updateMetadata = () => {
    document.title = t('meta.title');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.title'));
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.description'));
    }

    document.documentElement.lang = currentLanguage;
  };

  useEffect(() => {
    updateMetadata();
  }, [currentLanguage, t]);

  const handleLanguageSelect = (language: Language) => {
    setLanguage(language);
    localStorage.setItem('selectedLanguage', language);
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-black/90 hover:bg-black text-white rounded-lg transition-all duration-200 border border-gray-700 shadow-lg backdrop-blur-sm"
      >
        <img src={currentLang.flag} alt="Flag" style={{ width: 'auto', height: '20px' }} />
        <span className="text-sm font-medium">{currentLang.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700 z-50 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-800 transition-colors ${
                currentLanguage === language.code ? 'bg-gray-800 text-white' : 'text-gray-200'
              }`}
            >
              <img src={language.flag} alt="Flag" style={{ width: '24px', height: 'auto' }} />
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;