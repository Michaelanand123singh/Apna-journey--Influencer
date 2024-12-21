// src/components/Home/ServicesOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Influencer Matching",
      description: "Connect with the perfect influencers for your brand using our AI-powered matching system.",
      icon: "🎯",
      link: "/services/influencer-matching"
    },
    {
      id: 2,
      title: "Content Creation",
      description: "Professional content creation services to help you stand out in the digital space.",
      icon: "🎨",
      link: "/services/content-creation"
    },
    {
      id: 3,
      title: "Campaign Analytics",
      description: "Detailed analytics and insights to measure and optimize your campaign performance.",
      icon: "📊",
      link: "/services/analytics"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Comprehensive solutions for your digital marketing needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="relative group"
            >
              <div className="h-full rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;