// src/components/HomePage.jsx
import React from 'react';

import HeroSection from './HeroSection.jsx';
import PopularAreas from './PopularAreas.jsx';
import FeaturedListings from './FeaturedListings.jsx';
import FeaturesSection from './FeaturesSection.jsx';

function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularAreas />
      <FeaturedListings />
      <FeaturesSection />
    </>
  );
}

export default HomePage;