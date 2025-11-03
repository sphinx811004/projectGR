// src/components/PropertyPage.jsx

import React, { useState } from 'react'; // <-- 1. Import useState
import { useParams } from 'react-router-dom';
import { listingsData } from '../data.js';
import ReviewList from './ReviewList.jsx';   // <-- 2. Import ReviewList
import ReviewForm from './ReviewForm.jsx';   // <-- 3. Import ReviewForm

function PropertyPage() {
  const { id } = useParams();
  const propertyData = listingsData.find((property) => property.id === parseInt(id));

  // 4. Set up state for reviews, initializing it from our data.
  // This allows us to add new reviews to the list.
  const [reviews, setReviews] = useState(propertyData ? propertyData.reviews : []);

  // 5. Handle cases where the property isn't found
  if (!propertyData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Property not found.</h1>
        <p>This listing may no longer exist.</p>
      </div>
    );
  }

  // 6. Create a function to handle the new review submission
  const handleReviewSubmit = (newReview) => {
    // In a real app, we'd send this to a database.
    // Here, we'll just add it to our state.
    const reviewWithId = {
      ...newReview,
      id: new Date().getTime() // simple unique ID
    };
    
    // Add the new review to the *top* of the list
    setReviews([reviewWithId, ...reviews]);
  };

  // 7. Destructure the data *from the property we found*
  const { title, price, address, beds, baths, billsIncluded, description, amenities, images } = propertyData;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* ## Main Content (Left Side) ## */}
        <div className="w-full lg:w-2/3">
          
          {/* Image Gallery */}
          <div className="mb-6">
            <div 
              className="aspect-video w-full rounded-xl bg-cover bg-center mb-2"
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
            <div className="grid grid-cols-2 gap-2">
              <div 
                className="aspect-video w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${images[1]})` }}
              ></div>
              <div 
                className="aspect-video w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${images[2]})` }}
              ></div>
            </div>
          </div>

          {/* Title & Details */}
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{address}</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-gray-700 dark:text-gray-300 mb-6 border-y dark:border-white/10 py-4">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">bed</span>
              {beds} Bed{beds > 1 ? 's' : ''}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">bathtub</span>
              {baths} Bath{baths > 1 ? 's' : ''}
            </span>
            {billsIncluded && (
              <span className="flex items-center gap-2 font-medium text-orange-500">
                <span className="material-symbols-outlined">local_fire_department</span>
                Bills Included
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">About this property</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>S
          </div>

          {/* Amenities */}
          <div className="mb-8"> {/* <-- 8. Added margin-bottom */}
            <h2 className="text-2xl font-bold mb-4">What this place offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-white/5">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- 9. ADD THE NEW REVIEWS SECTION --- */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            {/* The form for submitting a new review */}
            <ReviewForm onSubmit={handleReviewSubmit} />
            
            {/* The list of existing reviews */}
            <ReviewList reviews={reviews} />
          </div>
          {/* --- End of New Reviews Section --- */}

        </div>

        {/* ## Sidebar (Right Side) ## */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-28 p-6 rounded-xl shadow-lg bg-white dark:bg-white/5 border dark:border-white/10">
            <p className="text-3xl font-bold mb-4">
              ₹{price}<span className="text-lg font-medium text-gray-600 dark:text-gray-400">/month</span>
            </p>
            <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              Request to Book
            </button>
            <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-200 dark:bg-white/10 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-white/20 transition-colors mt-3">
              Contact Landlord
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;