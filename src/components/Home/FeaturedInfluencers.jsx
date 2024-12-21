// src/components/Home/FeaturedInfluencers.jsx
import React from 'react';
import Card from '../common/Card';

const FeaturedInfluencers = () => {
  const influencers = [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "Lifestyle & Fashion",
      followers: "500K",
      image: "/api/placeholder/400/400",
      engagement: "4.5%"
    },
    {
      id: 2,
      name: "Mike Chen",
      category: "Tech & Gaming",
      followers: "750K",
      image: "/api/placeholder/400/400",
      engagement: "5.2%"
    },
    {
      id: 3,
      name: "Priya Patel",
      category: "Food & Travel",
      followers: "1M",
      image: "/api/placeholder/400/400",
      engagement: "3.8%"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Influencers
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Meet some of our top-performing content creators
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {influencers.map((influencer) => (
            <Card key={influencer.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{influencer.name}</h3>
                <p className="text-sm text-gray-500">{influencer.category}</p>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Followers</p>
                    <p className="text-lg font-semibold text-gray-900">{influencer.followers}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Engagement</p>
                    <p className="text-lg font-semibold text-gray-900">{influencer.engagement}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfluencers;