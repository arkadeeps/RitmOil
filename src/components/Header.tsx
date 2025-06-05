
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import eng from '../img/logo_ritmoil_eng.png';
import rus from '../img/logo_ritmoil_rus.png';
import kaz from '../img/logo_ritmoil_kz.png';


const Header = () => {
  const { t } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const aboutItems = [
    { label: t('header.about.mission'), path: '/about/mission' },
    { label: t('header.about.history'), path: '/about/history' },
    { label: t('header.about.management'), path: '/about/management' },
    { label: t('header.about.assets'), path: '/about/assets' }
  ];

  const servicesItems = [
    { label: t('header.services.hotel'), path: '/services/hotel' },
    { label: t('header.services.catering'), path: '/services/catering' },
    { label: t('header.services.transport'), path: '/services/transport' },
    { label: t('header.services.management'), path: '/services/management' },
    { label: t('header.services.franchise'), path: '/services/franchise' }
  ];

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-3 h-20 w-50 hover:opacity-80 transition-opacity">
            <img 
              src = {t('img.logo') === 'eng' ? eng : t('img.logo') === 'rus' ? rus : t('img.logo') === 'kaz' ? kaz : eng} 
              alt="Ritm Oil Logo"
              className="w-auto h-20 rounded-lg object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {t('header.main')}
            </Link>

            {/* About Dropdown */}
            <div className="relative">
              <button 
                onClick={() => handleDropdownClick('about')}
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{t('header.about.title')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeDropdown}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => handleDropdownClick('services')}
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{t('header.services.title')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border z-50">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeDropdown}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/clients"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/clients') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {t('header.clients')}
            </Link>

            <Link
              to="/contacts"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/contacts') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {t('header.contacts')}
            </Link>

            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Main
              </Link>
              
              <div>
                <p className="font-medium text-gray-800 mb-2">About</p>
                <div className="ml-4 space-y-2">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-2">Services</p>
                <div className="ml-4 space-y-2">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/clients"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </Link>

              <Link
                to="/contacts"
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdown}
        />
      )}
    </header>
  );
};

export default Header;
