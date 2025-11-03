// src/components/ListingsPage.jsx
import React, { useState, useMemo } from 'react';
import { listingsData } from '../data.js';
import ListingCard from './ListingCard.jsx';

function ListingsPage() {
  // --- State for Filters ---
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('any');
  const [beds, setBeds] = useState('any');
  const [billsIncluded, setBillsIncluded] = useState(false);

  // --- Filtering Logic ---
  // useMemo ensures this only re-runs when a filter changes
  const filteredListings = useMemo(() => {
    return listingsData.filter(listing => {
      // 1. Search Term Filter (checks title and address)
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        listing.title.toLowerCase().includes(searchLower) ||
        listing.address.toLowerCase().includes(searchLower);

      // 2. Price Range Filter
      const matchesPrice = () => {
        switch (priceRange) {
          case 'any':
            return true;
          case 'under-8k':
            return listing.price < 8000;
          case '8k-12k':
            return listing.price >= 8000 && listing.price <= 12000;
          case 'over-12k':
            return listing.price > 12000;
          default:
            return true;
        }
      };

      // 3. Beds Filter
      const matchesBeds = () => {
        switch (beds) {
          case 'any':
            return true;
          case '1':
            return listing.beds === 1;
          case '2':
            return listing.beds === 2;
          case '3+':
            return listing.beds >= 3;
          default:
            return true;
        }
      };

      // 4. Bills Included Filter
      const matchesBills = billsIncluded ? listing.billsIncluded === true : true;

      // Return true only if all filters match
      return matchesSearch && matchesPrice() && matchesBeds() && matchesBills;
    });
  }, [searchTerm, priceRange, beds, billsIncluded]); // Re-run filter when state changes

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ## Filter Bar ## */}
      <div className="mb-8 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          
          {/* Search Term */}
          <div className="flex flex-col gap-2">
            <label htmlFor="search-term" className="text-sm font-medium">Search Location or Title</label>
            <input
              type="text"
              id="search-term"
              placeholder="e.g., 'Shankar Nagar' or 'AIIMS'"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input w-full rounded-lg text-black"
            />
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-2">
            <label htmlFor="price-range" className="text-sm font-medium">Price Range</label>
            <select
              id="price-range"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="form-select w-full rounded-lg text-black"
            >
              <option value="any">Any</option>
              <option value="under-8k">Under ₹8,000</option>
              <option value="8k-12k">₹8,000 - ₹12,000</option>
              <option value="over-12k">Over ₹12,000</option>
            </select>
          </div>

          {/* Beds */}
          <div className="flex flex-col gap-2">
            <label htmlFor="beds" className="text-sm font-medium">Beds</label>
            <select
              id="beds"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="form-select w-full rounded-lg text-black"
            >
              <option value="any">Any</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3+">3+ Beds</option>
            </select>
          </div>

          {/* Bills Included */}
          <div className="flex items-center h-12">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={billsIncluded}
                onChange={(e) => setBillsIncluded(e.target.checked)}
                className="form-checkbox h-5 w-5 rounded text-primary"
              />
              <span className="font-medium">Bills Included</span>
            </label>
          </div>

        </div>
      </div>

      {/* ## Listings Grid ## */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {filteredListings.length} {filteredListings.length === 1 ? 'Result' : 'Results'} Found
        </h2>
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <p className="text-xl font-medium">No listings match your filters.</p>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListingsPage;