
import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <HeroSection />
      
      {/* About Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('home.about.title')}</h2>
            <div className="max-w-4xl mx-auto text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('home.about.description_1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('home.about.description_2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('home.about.description_3')}
              </p>
              <div className="text-center pt-6">
                <p className="text-2xl font-semibold text-blue-600 italic">
                  {t('home.about.quote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('home.services.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('home.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('home.services.hotel.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.services.hotel.description')}
              </p>
              <Link to="/services/hotel" className="text-blue-600 hover:text-blue-700 font-medium">
                {t('common.learn_more')} →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('home.services.catering.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.services.catering.description')}
              </p>
              <Link to="/services/catering" className="text-green-600 hover:text-green-700 font-medium">
                {t('common.learn_more')} →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('home.services.transport.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.services.transport.description')}
              </p>
              <Link to="/services/transport" className="text-purple-600 hover:text-purple-700 font-medium">
                {t('common.learn_more')} →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('home.services.management.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.services.management.description')}
              </p>
              <Link to="/services/management" className="text-red-600 hover:text-red-700 font-medium">
                {t('common.learn_more')} →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('home.services.franchise.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.services.franchise.description')}
              </p>
              <Link to="/services/franchise" className="text-teal-600 hover:text-navy-700 font-medium">
                {t('common.learn_more')} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/contacts"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
