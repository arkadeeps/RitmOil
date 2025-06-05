
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { Building, TrendingUp, Calendar, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mgmtImgs } from '../../img/management_agree/mgmt'

const Management = () => {
  const { t } = useLanguage();
  
  const managementImages = Object.values(mgmtImgs);

  const features = [
    {
      icon: Building,
      title: t('mgmtagree.features.total_services'),
      description: t('mgmtagree.features.total_services_desc')
    },
    {
      icon: TrendingUp,
      title: t('mgmtagree.features.performance_fees'),
      description: t('mgmtagree.features.performance_fees_desc')
    },
    {
      icon: Calendar,
      title: t('mgmtagree.features.long_term'),
      description: t('mgmtagree.features.long_term_desc')
    },
    {
      icon: Target,
      title: t('mgmtagree.features.sales_marketing'),
      description: t('mgmtagree.features.sales_marketing_desc')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('mgmtagree.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('mgmtagree.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={managementImages as string[]}
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('mgmtagree.services.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('mgmtagree.services.subtitle')}
              </p>
            </div>

            {/*Main Content */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10">
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('mgmtagree.description_1')}"
                  </p>
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('mgmtagree.description_2')}"
                  </p>
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('mgmtagree.description_3')}"
                  </p>
                </div>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Fee Structure */}
            <div className="bg-teal-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('mgmtagree.fee_structure.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-teal-600 mb-2">{t('mgmtagree.fee_structure.management_fee')}</h4>
                  <p className="text-gray-700">{t('mgmtagree.fee_structure.management_fee_desc')}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-teal-600 mb-2">{t('mgmtagree.fee_structure.performance_fee')}</h4>
                  <p className="text-gray-700">{t('mgmtagree.fee_structure.performance_fee_desc')}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-teal-600 mb-2">{t('mgmtagree.fee_structure.marketing_fee')}</h4>
                  <p className="text-gray-700">{t('mgmtagree.fee_structure.marketing_fee_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Management;
