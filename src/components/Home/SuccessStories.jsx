// src/components/Home/SuccessStories.jsx
import React from 'react';
import Card from '../common/Card';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "10x Growth in 6 Months",
      company: "FashionFix",
      description: "Our partnership with influencers led to a 10x increase in social media engagement and doubled our sales.",
      metrics: {
        engagement: "+900%",
        sales: "+200%",
        reach: "2M+"
      }
    },
    {
      id: 2,
      title: "Viral Campaign Success",
      company: "EcoLife",
      description: "Our sustainable product launch reached millions through strategic influencer partnerships.",
      metrics: {
        engagement: "+500%",
        sales: "+150%",
        reach: "5M+"
      }
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            See how brands transformed their digital presence through our platform
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {stories.map((story) => (
            <Card key={story.id} className="relative">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{story.title}</h3>
                <p className="text-lg font-medium text-blue-600">{story.company}</p>
                <p className="mt-4 text-gray-500">{story.description}</p>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {Object.entries(story.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{value}</p>
                      <p className="text-sm text-gray-500 capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;