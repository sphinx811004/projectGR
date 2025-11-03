// src/components/HeroSection.jsx
import React, { useState } from 'react';

function HeroSection() {
  // Use React's useState hook to manage form input values
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Any');

  const heroStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(16, 26, 34, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAumTp6Ng34ElvbYai_IAII8mT5eimsgn1kUohtVTCD8V-jA8lQFVZppv8fXeuEO9ikdDZ1xPC6tcYjrdKeY4Yalx97IkOfsoWNc2w3a0-4L-j6vYFm5MNzPMWRbKtzQIA75raLoEc-nNPCDnwOrpTlTaxVlwBpzyPaAqo1T_6LrMUWo2U-eg0sypyvijFJ5Adr4vJ-AoY7YLrjJ6OaPfJNQjsqg2EF0ivNREgvh08mNdhpUwfF_Yu9be1C1cAKVeEFvtX5iNa4eZBM")',
  };

  const handleSearch = () => {
    // Logic to handle search (e.g., API call)
    console.log('Searching for:', { location, priceRange });
  };

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="@container">
        <div 
          className="flex min-h-[480px] flex-col gap-8 rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-6 text-center"
          aria-label="A group of happy, diverse students studying together in a modern, well-lit apartment living room."
          style={heroStyle}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
              Your Student Home, Found
            </h1>
            <h2 className="text-white/90 text-base font-normal leading-normal @[480px]:text-lg">
              Renting made easy for students. Search thousands of verified properties near your campus.
            </h2>
          </div>
          <div className="w-full max-w-4xl p-4 sm:p-6 rounded-xl bg-background-light/10 dark:bg-background-dark/20 backdrop-blur-md border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto] gap-4 items-end">
              <div className="flex flex-col gap-2 text-left">
                {/* Use htmlFor instead of for */}
                <label className="text-white text-sm font-medium" htmlFor="location-search">Location</label>
                <div className="relative flex w-full items-center">
                  <span className="material-symbols-outlined absolute left-3 text-white/50">search</span>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-white/20 bg-white/10 focus:border-primary h-12 placeholder:text-white/50 pl-10 pr-4 text-base"
                    id="location-search"
                    placeholder="Enter university, city, or zip..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-white text-sm font-medium" htmlFor="price-range">Price Range</label>
                <div className="relative flex w-full items-center">
                  <span className="material-symbols-outlined absolute left-3 text-white/50">payments</span>
                  <select
                    className="form-select appearance-none w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-white/20 bg-white/10 focus:border-primary h-12 pl-10 pr-4 text-base"
                    id="price-range"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                   <option className="text-black">Any</option>
  <option className="text-black">Under ₹8,000</option>
  <option className="text-black">₹8,000 - ₹12,000</option>
  <option className="text-black">₹12,000 - ₹18,000</option>
  <option className="text-black">Over ₹18,000</option>
                  </select>
                </div>
              </div>
              <button
                className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                onClick={handleSearch}
              >
                <span className="truncate">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;