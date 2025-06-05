
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { Target, Eye, Heart, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { heroImgs } from '../../img/heroImgs/heroImg'

const Mission = () => {
  const { t } = useLanguage();
  
  const missionImages = Object.values(heroImgs);

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('mission.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('mission.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={missionImages as string[]}
            className="h-[400px] w-full"
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">{t('mission.our_mission')}</h2>
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
              <div className="relative z-10">
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  "{t('mission.statement')}"
                </p>
              </div>
            </div>
          </div>

          {/* Our Purposes */}
          <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">{t('mission.our_purposes')}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t('mission.client_excellence')}</h3>
              <p className="text-gray-600 text-center">
                {t('mission.client_excellence_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t('mission.employee_development')}</h3>
              <p className="text-gray-600 text-center">
                {t('mission.employee_development_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t('mission.social_responsibility')}</h3>
              <p className="text-gray-600 text-center">
                {t('mission.social_responsibility_desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t('mission.business_growth')}</h3>
              <p className="text-gray-600 text-center">
                {t('mission.business_growth_desc')}
              </p>
            </div>
          </div>

          {/* ISO Certification*/}
          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('mission.iso.title')}
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                {t('mission.iso.description')}
              </p>
              <div className="text-center">
                <p className="text-2xl font-semibold italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  "{t('mission.motto')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;
