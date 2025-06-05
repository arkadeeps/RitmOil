
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner';

const Contacts = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isNotRobot: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.isNotRobot) {
      toast.error(t('contacts.form.robot_error'));
      return;
    }

    toast.success(t('contacts.form.success_message'));
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      isNotRobot: false
    });
  };

  const departments = [
    {
      name: t('contacts.departments.head_office.name'),
      position: t('contacts.departments.head_office.position'),
      department: t('contacts.departments.head_office.department'),
      phone: '+7 (7122) 321 795/355 320',
      email: 'info@ritmoil.com',
      address: t('contacts.departments.head_office.address')
    },
    {
      name: t('contacts.departments.hotel.name'),
      position: t('contacts.departments.hotel.position'),
      department: t('contacts.departments.hotel.department'),
      phone: '+7 (7122) 320 424/26',
      mobile: '+7 (701) 994 1001',
      skype: 'basab1',
      email: 'basabroy@ritmoil.com',
      address: t('contacts.departments.hotel.address')
    },
    {
      name: t('contacts.departments.franchise.name'),
      position: t('contacts.departments.franchise.position'),
      department: t('contacts.departments.franchise.department'),
      phone: '+7 (7122) 321 795/355 320',
      email: 'saha@ritmoil.com',
      address: t('contacts.departments.franchise.address')
    },
    {
      name: t('contacts.departments.vacancy.name'),
      position: t('contacts.departments.vacancy.position'),
      department: t('contacts.departments.vacancy.department'),
      phone: '+7 (7122) 321 795/355 320',
      mobile: '+7 (701) 952 2770',
      email: 'cv@peopleservice.kz',
      address: t('contacts.departments.vacancy.address')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('contacts.hero.title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {t('contacts.hero.description')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('contacts.form.title')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.name_label')} *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t('contacts.form.name_placeholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.email_label')} *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t('contacts.form.email_placeholder')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.subject_label')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t('contacts.form.subject_placeholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacts.form.message_label')} *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t('contacts.form.message_placeholder')}
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="robot"
                  checked={formData.isNotRobot}
                  onChange={(e) => setFormData({ ...formData, isNotRobot: e.target.checked })}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="robot" className="text-sm text-gray-700">
                  {t('contacts.form.robot_label')} *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {t('contacts.form.submit_button')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('contacts.info.title')}</h2>
            
            {/* Company Contact */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('contacts.info.main_office')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">{t('contacts.info.address_label')}</p>
                    <p className="text-gray-600">{departments[0].address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">{t('contacts.info.phone_label')}</p>
                    <p className="text-gray-600">{t('contacts.info.tel_fax')}: {departments[0].phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">{t('contacts.info.email_label')}</p>
                    <p className="text-gray-600">
                      <a href={`mailto:${departments[0].email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                        {departments[0].email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{t('contacts.departments.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departments.map((person, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{person.name}</h4>
                        <p className="text-sm text-blue-600">{person.position}</p>
                        <p className="text-sm text-gray-500 mb-1">{person.department}</p>
                        <p className="text-xs text-gray-500 mb-2">{person.address}</p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600">{person.mobile ? `${t('contacts.info.mobile')}: ${person.mobile}` : `${t('contacts.info.tel_fax')}: ${person.phone}`}</p>
                          {person.mobile && <p className="text-xs text-gray-600">{t('contacts.info.tel_fax')}: {person.phone}</p>}
                          {person.skype && <p className="text-xs text-gray-600">{t('contacts.info.skype')}: {person.skype}</p>}
                          <p className="text-xs text-gray-600">
                          {t('contacts.info.email')}:
                            <a href={`mailto:${person.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                              {person.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
