// src/components/TenantProfilePage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tenantData } from '../tenantData.js';
import { useAuth } from '../context/AuthContext.jsx';
import ReviewForm from './ReviewForm.jsx';

// Helper component for Star Rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`material-symbols-outlined !text-base ${
            index < rating ? 'text-orange-400' : 'text-gray-400'
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
};

function TenantProfilePage() {
  // --- THIS LINE IS NOW FIXED ---
  const { id } = useParams(); 
  // -----------------------------
  
  const { user } = useAuth(); // Get the currently logged-in user

  // Find the tenant based on the ID from the URL
  const tenant = tenantData.find(t => t.id === parseInt(id));

  // Set up state for this tenant's reviews
  const [reviews, setReviews] = useState(tenant ? tenant.ownerReviews : []);

  // Handle the new review submission
  const handleReviewSubmit = (newReview) => {
    // We add the logged-in owner's name to the review
    const reviewWithId = {
      ...newReview,
      id: new Date().getTime(), // simple unique ID
      ownerName: user ? user.name : 'Anonymous Owner', // Add the owner's name
    };
    
    // Add the new review to the top of the list
    setReviews([reviewWithId, ...reviews]);
  };

  // Show a "not found" message if no tenant matches
  if (!tenant) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Tenant Profile Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-8 p-6 rounded-xl bg-gray-100 dark:bg-white/5">
        <div className="grid place-items-center h-24 w-24 rounded-full bg-primary/20 text-primary">
          <span className="material-symbols-outlined !text-6xl">person</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{tenant.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Member since {tenant.memberSince}</p>
          <p className="mt-2">{tenant.bio}</p>
        </div>
      </div>

      {/* Reviews from Owners */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reviews from Owners</h2>

        {/* Only show the form if an 'owner' is logged in */}
        {user && user.type === 'owner' && (
          <ReviewForm onSubmit={handleReviewSubmit} />
        )}

        {/* This list will now use the 'reviews' state */}
        <div className="space-y-6 mt-6">
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id} className="p-4 rounded-lg border dark:border-white/10 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold">{review.ownerName}</h3>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
              </div>
            ))
          ) : (
            <div className="text-center p-6 text-gray-500">
              <p>{tenant.name} has no reviews from owners yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TenantProfilePage;