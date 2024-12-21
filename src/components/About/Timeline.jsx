// src/components/About/Timeline.jsx
import React from 'react';

const Timeline = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to transform influencer marketing.'
    },
    {
      year: '2021',
      title: 'Platform Launch',
      description: 'Launched our AI-powered matching platform.'
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Reached 5000+ influencers and 200+ brands.'
    },
    {
      year: '2023',
      title: 'International Expansion',
      description: 'Expanded operations to multiple countries.'
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Key milestones in our growth story
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex items-center">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
                      {/* Year bubble */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold z-10">
                        {milestone.year.slice(-2)}
                      </div>
                      
                      {/* Content */}
                      <div className="mt-3 lg:mt-0 text-center lg:text-left">
                        <h3 className="text-lg font-bold text-gray-900">{milestone.title}</h3>
                        <p className="mt-1 text-gray-500">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;