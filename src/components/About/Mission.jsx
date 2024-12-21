// src/components/About/Mission.jsx
import React from 'react';
import Card from '../common/Card';

const Mission = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              To revolutionize digital marketing by creating authentic connections between brands and influencers, 
              fostering meaningful engagement that drives real business results.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Active Brands', value: '500+' },
                  { title: 'Influencers', value: '10K+' },
                  { title: 'Campaigns', value: '2000+' },
                  { title: 'Success Rate', value: '95%' }
                ].map((stat) => (
                  <div key={stat.title} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="/api/placeholder/600/400"
              alt="Team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;