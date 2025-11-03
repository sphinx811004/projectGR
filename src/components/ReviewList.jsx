// src/components/ReviewList.jsx
import React from 'react';

// A helper component to show stars
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={`material-symbols-outlined !text-base ${
              starValue <= rating ? 'text-orange-400' : 'text-gray-400'
            }`}
          >
            star
          </span>
        );
      })}
    </div>
  );
};


function ReviewList({ reviews }) {
  // Show a message if there are no reviews
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        <p>No reviews yet. Be the first to leave one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border-b dark:border-white/10">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-semibold">{review.name}</h4>
            <StarRating rating={review.rating} />
          </div>
          <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;