// pages/HomePage.jsx
import { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedInfluencers from '../components/Home/FeaturedInfluencers';
import SuccessStories from '../components/Home/SuccessStories';
import ServicesOverview from '../components/Home/ServicesOverview';
import CTASection from '../components/Home/CTASection';
import ErrorBoundary from '../components/common/ErrorBoundary';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Apna Journey - Connect with Top Influencers';
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <HeroSection />
        <FeaturedInfluencers />
        <ServicesOverview />
        <SuccessStories />
        <CTASection />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;