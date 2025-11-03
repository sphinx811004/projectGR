// src/components/ListingCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ListingCard({ listing }) {
  // AFTER (This is CORRECT):
const { id, title, price, beds, baths, billsIncluded, images } = listing;

 // AFTER (This is CORRECT):
const cardStyle = {
  backgroundImage: `url("${images[0]}")`,
};

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-white/5 shadow-md border border-gray-200 dark:border-white/10 group">
      <div className="relative">
       
<div 
  className="aspect-video w-full bg-cover bg-center" 
  aria-label={title}
  style={cardStyle}
></div>
        <button className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white hover:bg-primary transition-colors">
          <span className="material-symbols-outlined text-base">favorite</span>
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <p className="text-lg font-bold text-primary whitespace-nowrap">
            ${price}
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">/mo</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
          <span className="flex items-center gap-2"><span className="material-symbols-outlined">bed</span>{beds} Bed{beds > 1 ? 's' : ''}</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined">bathtub</span>{baths} Bath{baths > 1 ? 's' : ''}</span>
          {billsIncluded && (
            <span className="flex items-center gap-2 font-medium text-orange-500">
              <span className="material-symbols-outlined">local_fire_department</span>
              Bills Included
            </span>
          )}
        </div>
        <Link 
        to={`/property/${id}`} 
        className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ListingCard;