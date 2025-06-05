
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { Award, Users, Globe, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { frnchImgs } from '../../img/franchise_agree/frnch'

const Franchise = () => {
  const { t } = useLanguage();
  
  const franchiseImages = Object.values(frnchImgs);

  const brands = [
    "Wyndham Worldwide",
    "IHG (InterContinental Hotels Group)",
    "Radisson",
    "Accor"
  ];

  const features = [
    {
      icon: Award,
      title: t('franchise.features.brand_assistance'),
      description: t('franchise.features.brand_assistance_desc')
    },
    {
      icon: Users,
      title: t('franchise.features.qualified_staff'),
      description: t('franchise.features.qualified_staff_desc')
    },
    {
      icon: Globe,
      title: t('franchise.features.marketing_support'),
      description: t('franchise.features.marketing_support_desc')
    },
    {
      icon: Shield,
      title: t('franchise.features.brand_standards'),
      description: t('franchise.features.brand_standards_desc')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('franchise.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('franchise.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={franchiseImages}
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('franchise.services.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('franchise.services.subtitle')}
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 mb-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
              <div className="relative z-10">
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('franchise.description_1')}
                </p>
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('franchise.description_2')}
                </p>
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('franchise.description_3')}
                </p>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Partner Brands */}
            <div className="bg-purple-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('franchise.partner_brands.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brands.map((brand, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="font-semibold text-gray-800">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('franchise.brand_standards.title')}</h3>
                <p className="text-gray-600">
                  {t('franchise.brand_standards.description')}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('franchise.contract.title')}</h3>
                <p className="text-gray-600">
                  {t('franchise.contract.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Franchise;
