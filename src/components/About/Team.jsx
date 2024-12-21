// src/components/About/Team.jsx
import React from 'react';
import Card from '../common/Card';

const Team = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/api/placeholder/400/400',
      bio: '15+ years of experience in digital marketing and tech entrepreneurship.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Marketing Officer',
      image: '/api/placeholder/400/400',
      bio: 'Former Marketing Director at leading tech companies with expertise in influencer marketing.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Raj Patel',
      role: 'Head of Technology',
      image: '/api/placeholder/400/400',
      bio: 'Tech veteran with experience building scalable platforms and AI solutions.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Passionate experts dedicated to your success
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name}>
              <div className="aspect-w-3 aspect-h-4">
                <img
                  className="object-cover rounded-lg"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="mt-3 text-gray-500">{member.bio}</p>
                <div className="mt-4 flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;