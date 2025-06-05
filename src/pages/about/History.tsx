
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { Calendar, Building, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { heroImgs } from '../../img/heroImgs/heroImg'

const History = () => {
  const { t } = useLanguage();

  const historyImages = Object.values(heroImgs);

  const milestones = [
    { year: '2001', event: t('history.milestones.2001') },
    { year: '2003', event: t('history.milestones.2003') },
    { year: '2005', event: t('history.milestones.2005') },
    { year: '2006', event: t('history.milestones.2006') },
    { year: '2007', event: t('history.milestones.2007') },
    { year: '2009', event: t('history.milestones.2009') },
    { year: '2013', event: t('history.milestones.2013') },
    { year: '2015', event: t('history.milestones.2015') },
    { year: '2016', event: t('history.milestones.2016') }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('history.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('history.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={historyImages as string[]}
            className="h-[400px] w-full"
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* History Content */}
      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">{t('history.journey.title')}</h2>
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
              <div className="relative z-10">
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  "{t('history.journey.description')}"
                </p>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('history.milestones.title')}</h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</h4>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('history.today.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('history.today.properties.title')}</h4>
                  <p className="text-gray-600">{t('history.today.properties.description')}</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('history.today.locations.title')}</h4>
                  <p className="text-gray-600">{t('history.today.locations.description')}</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{t('history.today.experience.title')}</h4>
                  <p className="text-gray-600">{t('history.today.experience.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
