
import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout';
import ImageSlideshow from '../../components/ImageSlideshow';
import { Bed, Wifi, Coffee, Music, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { tengriImgs } from '../../img/Tengri/tengriImg'

const Hotel = () => {
  const { t } = useLanguage();
  
  const hotelImages = Object.values(tengriImgs);

  const amenities = [
    { icon: Bed, title: t('hotel.amenities.rooms'), description: t('hotel.amenities.rooms_desc') },
    { icon: Wifi, title: t('hotel.amenities.connectivity'), description: t('hotel.amenities.connectivity_desc') },
    { icon: Coffee, title: t('hotel.amenities.cuisine'), description: t('hotel.amenities.cuisine_desc') },
    { icon: Music, title: t('hotel.amenities.entertainment'), description: t('hotel.amenities.entertainment_desc') }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl leading-snug font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('hotel.title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200">
            {t('hotel.subtitle')}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Image Slideshow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageSlideshow 
            images={hotelImages as string[]}
            className="h-[400px] w-full"
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Tengri Hotel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('hotel.tengri.title')}</h2>
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-amber-600 mr-2" />
                <p className="text-lg text-gray-600">{t('hotel.tengri.location')}</p>
              </div>
            </div>

            {/*Main Content */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10">
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('hotel.tengri.description_1')}"
                  </p>
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('hotel.tengri.description_2')}"
                  </p>
                  <p className="text-2xl font-semibold italic mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    "{t('hotel.tengri.description_3')}"
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                      <amenity.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{amenity.title}</h3>
                  </div>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>

            {/* Booking Information */}
            <div className="bg-amber-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('hotel.booking.title')}</h3>
              <p className="text-lg text-gray-700 mb-6">
                {t('hotel.booking.description')}
              </p>
              <Link
                to="http://www.hotel-tengri.com/eng/book_now/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('hotel.booking.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hotel;
