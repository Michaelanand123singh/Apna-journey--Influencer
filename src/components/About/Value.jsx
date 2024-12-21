// src/components/About/Values.jsx
import React from 'react';
import Card from '../common/Card';

const Values = () => {
  const values = [
    {
      title: 'Authenticity',
      description: 'We believe in fostering genuine connections between brands and influencers.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology and creative solutions.',
      icon: '💡'
    },
    {
      title: 'Transparency',
      description: 'Open and honest communication in all our dealings with clients and partners.',
      icon: '🔍'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering outstanding results and exceeding expectations.',
      icon: '⭐'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Values
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            The principles that guide everything we do
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <div className="p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-500">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;