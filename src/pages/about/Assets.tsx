
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { FileText, Shield, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { heroImgs } from '../../img/heroImgs/heroImg'

const Assets = () => {
  const { t } = useLanguage();

  const assetsImages = Object.values(heroImgs);

  const clients = t('assets.clients.list').split(',');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('assets.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('assets.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={assetsImages as string[]}
            className="h-[400px] w-full"
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Assets Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Licenses and Permits */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('assets.licenses.title')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                {t('assets.licenses.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('assets.licenses.business.title')}</h3>
                  <p className="text-gray-600">{t('assets.licenses.business.description')}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('assets.licenses.trademark.title')}</h3>
                  <p className="text-gray-600">{t('assets.licenses.trademark.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance Coverage */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('assets.insurance.title')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {t('assets.insurance.description')}
              </p>
            </div>
          </div>
          
          {/* Financial Trust */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('assets.financial.title')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {t('assets.financial.description')}
              </p>
            </div>
          </div>

          {/* Client Portfolio */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('assets.clients.title')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                {t('assets.clients.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-sm font-medium text-gray-800">{client.trim()}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6 italic">{t('assets.clients.footer')}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Assets;
