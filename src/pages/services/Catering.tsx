
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { ChefHat, Home, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cateringImgs } from '../../img/Catering/catering'

const Catering = () => {
  const { t } = useLanguage();
  
  const cateringImages = Object.values(cateringImgs);

  const services = [
    {
      icon: Home,
      title: t('catering.services.camp_management'),
      description: t('catering.services.camp_management_desc')
    },
    {
      icon: Users,
      title: t('catering.services.high_capacity'),
      description: t('catering.services.high_capacity_desc')
    },
    {
      icon: ChefHat,
      title: t('catering.services.quality_food'),
      description: t('catering.services.quality_food_desc')
    },
    {
      icon: Calendar,
      title: t('catering.services.event_catering'),
      description: t('catering.services.event_catering_desc')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('catering.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('catering.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={cateringImages as string[]}
            className="h-[400px] w-full"
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('catering.services.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('catering.services.subtitle')}
              </p>
            </div>

            {/*Main Content */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10">
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('catering.description_1')}"
                  </p>
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('catering.description_2')}"
                  </p>
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('catering.description_3')}"
                  </p>
                </div>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="bg-emerald-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('catering.achievements.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-emerald-600 mb-2">1800</h4>
                  <p className="text-gray-700">{t('catering.achievements.people_served')}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-emerald-600 mb-2">2013</h4>
                  <p className="text-gray-700">{t('catering.achievements.agip_tender')}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-emerald-600 mb-2">20+</h4>
                  <p className="text-gray-700">{t('catering.achievements.years_experience')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catering;
