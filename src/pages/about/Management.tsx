
import React from 'react';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { Users, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { heroImgs } from '../../img/heroImgs/heroImg'

const Management = () => {
  const { t } = useLanguage();

  const managementImages = Object.values(heroImgs);

  const teamMembers = [
    {
      name: t('management.team.chairman.name'),
      position: t('management.team.chairman.position'),
      description: t('management.team.chairman.description')
    },
    {
      name: t('management.team.general_director.name'),
      position: t('management.team.general_director.position'),
      description: t('management.team.general_director.description')
    },
    {
      name: t('management.team.operations_manager.name'),
      position: t('management.team.operations_manager.position'),
      description: t('management.team.operations_manager.description')
    },
    {
      name: t('management.team.hr_director.name'),
      position: t('management.team.hr_director.position'),
      description: t('management.team.hr_director.description')
    },
    {
      name: t('management.team.finance_director.name'),
      position: t('management.team.finance_director.position'),
      description: t('management.team.finance_director.description')
    },
    {
      name: t('management.team.chief_accountant.name'),
      position: t('management.team.chief_accountant.position'),
      description: t('management.team.chief_accountant.description')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('management.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('management.subtitle')}
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

      {/* Management Philosophy */}
      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">{t('management.philosophy.title')}</h2>
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
              <div className="relative z-10">
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('management.philosophy.description1')}
                </p>
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('management.philosophy.description2')}
                </p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <h4 className="text-xl font-semibold text-purple-600 mb-4">{member.position}</h4>
                    <p className="text-gray-700 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">{t('management.certifications.title')}</h3>
            <p className="text-lg text-gray-600">
              {t('management.certifications.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">ISO 9001:2008</p>
                <p className="text-sm text-gray-600">Certificate No. 63</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">ISO 22000:2005</p>
                <p className="text-sm text-gray-600">Certificate N TFSMS/16/HH/AN</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">ISO 9001-14001</p>
                <p className="text-sm text-gray-600">Quality Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Management;
