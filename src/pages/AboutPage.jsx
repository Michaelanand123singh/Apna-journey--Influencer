// src/pages/AboutPage.jsx
import React from 'react';
import Mission from '../components/About/Mission';
import Team from '../components/About/Team';
import Timeline from '../components/About/Timeline';
import Values from '../components/About/Value';

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <Mission />
      <Values />
      <Team />
      <Timeline />
    </div>
  );
};

export default AboutPage;