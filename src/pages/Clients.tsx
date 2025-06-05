
import React from 'react';
import Layout from '../components/Layout';
import ImageSlideshow from '../components/ImageSlideshow';
import { useLanguage } from '../contexts/LanguageContext';
import { heroImgs } from '../img/heroImgs/heroImg'

const Clients = () => {
  const { t } = useLanguage();
  
  const clientsImages = Object.values(heroImgs);

  // Major clients of Ritm Oil LLP with logos
  const clients = [
    { logo: "/src/img/clients/ncoc-logo.jpg" },
    { logo: "/src/img/clients/parkerdrilling.jpg" },
    { logo: "/src/img/clients/saipem.jpg" },
    { logo: "/src/img/clients/ersai.jpg" },
    { logo: "/src/img/clients/servicesinc.jpg" },
    { logo: "/src/img/clients/royalwagenborg.jpg" },
    { logo: "/src/img/clients/fmc.jpg" },
    { logo: "/src/img/clients/petrofac.jpg" },
    { logo: "/src/img/clients/weatherford.jpg" },
    { logo: "/src/img/clients/bakerhughes.jpg" },
    { logo: "/src/img/clients/imtechbolashak.jpg" },
    { logo: "/src/img/clients/fircroft.jpg" },
    { logo: "/src/img/clients/bonatti.jpg" },
    { logo: "/src/img/clients/kss.jpg" },
    { logo: "/src/img/clients/psnkazstroy.jpg" },
    { logo: "/src/img/clients/pl.jpg" },
    { logo: "/src/img/clients/kcadoitag.jpg" },
    { logo: "/src/img/clients/worleyparsons.jpg" },
    { logo: "/src/img/clients/jgc.jpg" },
    { logo: "/src/img/clients/ccc.jpg" },
    { logo: "/src/img/clients/languagelink.jpg" },
    { logo: "/src/img/clients/bateman.jpg" },
    { logo: "/src/img/clients/kentech.jpg" },
    { logo: "/src/img/clients/agip.jpg" },
    { logo: "/src/img/clients/cccompany.jpg" },
    { logo: "/src/img/clients/kazmunai.jpg" },
    { logo: "/src/img/clients/bureauveritas.jpg" },
    { logo: "/src/img/clients/halliburton-logo.jpg" },
    { logo: "/src/img/clients/isker-logo.jpg" },
    { logo: "/src/img/clients/marubeni.jpg" },
    { logo: "/src/img/clients/ndts.jpg" },
    { logo: "/src/img/clients/sarensgroup.jpg" },
    { logo: "/src/img/clients/gs.jpg" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('clients.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('clients.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={clientsImages}
            className="h-[400px] w-full"
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
             {/* Main Content */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 mb-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
              <div className="relative z-10">
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('clients.description_1')}
                </p>
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('clients.description_2')}
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('clients.partners.title')}</h2>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center min-h-[120px] hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <img 
                    src={client.logo} 
                    alt="Client logo"
                    className="w-full h-20 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Trust Statement */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl leading-snug font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('clients.partnership.title')}
                </h3>
                <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('clients.partnership.description')}
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-center text-white shadow-xl">
                <h4 className="text-3xl font-bold mb-2">33+</h4>
                <p className="text-blue-100">{t('clients.stats.clients')}</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-6 text-center text-white shadow-xl">
                <h4 className="text-3xl font-bold mb-2">20+</h4>
                <p className="text-green-100">{t('clients.stats.years')}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-center text-white shadow-xl">
                <h4 className="text-3xl font-bold mb-2">100%</h4>
                <p className="text-purple-100">{t('clients.stats.satisfaction')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
