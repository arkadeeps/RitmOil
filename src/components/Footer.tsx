
import React from 'react';
import {Link} from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h3 className="text-xl font-bold">Ritm Oil LLP</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white">+7 (7122) 355 320</p>
                  <p className="text-gray-400 text-sm">{t('footer.contact.main_office')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white">
                    <a href={`mailto:info@ritmoil.com`} className="hover:text-blue-600 transition-colors">
                      info@ritmoil.com
                    </a>
                  </p>
                  <p className="text-gray-400 text-sm">{t('footer.contact.general_inquiries')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white">{t('footer.contact.location')}</p>
                  <p className="text-gray-400 text-sm">{t('footer.contact.head_office')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about/mission" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.mission')}</Link>
              <Link to="/services/hotel" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.hotel')}</Link>
              <Link to="/about/history" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.history')}</Link>
              <Link to="/services/catering" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.catering')}</Link>
              <Link to="/about/management" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.management')}</Link>
              <Link to="/services/transport" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.transport')}</Link>
              <Link to="/clients" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.clients')}</Link>
              <Link to="/contacts" className="text-gray-400 hover:text-blue-400 transition-colors">{t('footer.links.contacts')}</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
