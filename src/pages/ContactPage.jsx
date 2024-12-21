// src/pages/ContactPage.jsx
import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import FAQ from '../components/Contact/FAQ';
import LocationMap from '../components/Contact/LocationMap';
import SupportInfo from '../components/Contact/SupportInfo';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          We're here to help and answer any questions you might have
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a message
          </h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Support Information
          </h2>
          <SupportInfo />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Visit Us
          </h2>
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;