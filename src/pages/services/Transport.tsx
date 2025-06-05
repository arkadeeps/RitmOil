
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { Truck, Package, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { transportImgs } from '../../img/transport/transport'

const Transport = () => {
  const { t } = useLanguage();
  
  const transportImages = Object.values(transportImgs);

  const services = [
    {
      icon: Truck,
      title: t('transport.full_range'),
      description: t('transport.full_range_desc')
    },
    {
      icon: Clock,
      title: t('transport.just_in_time'),
      description: t('transport.just_in_time_desc')
    },
    {
      icon: Package,
      title: t('transport.packing_moving'),
      description: t('transport.packing_moving_desc')
    },
    {
      icon: MapPin,
      title: t('transport.city_transport'),
      description: t('transport.city_transport_desc')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('transport.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('transport.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={transportImages as string[]}
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('transport.services.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('transport.services.subtitle')}
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 mb-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
              <div className="relative z-10">
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('transport.main_content.overview')}
                </p>
                
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('transport.main_content.supply_chain')}
                </p>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Packing & Moving Services */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white-800 mb-6 text-center">{t('transport.packing_moving')}</h3> 
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('transport.packing_moving.description')}"
                  </p>
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('transport.packing_moving.customer_service')}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transport;
