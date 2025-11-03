// src/components/FeaturedListings.jsx
import React from 'react';
import ListingCard from './ListingCard.jsx'; // Import the reusable card
import { listingsData } from '../data.js';
// In a real app, this data would come from an API


function FeaturedListings() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Featured Student-Friendly Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Map over the data array and render a card for each item */}
        {listingsData.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedListings;