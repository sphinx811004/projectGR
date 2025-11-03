// src/components/ReviewForm.jsx
import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment || !name) {
      alert('Please fill in your name and a comment.');
      return;
    }
    // Pass the new review up to the parent
    onSubmit({ name, rating: parseInt(rating), comment });
    
    // Reset the form
    setName('');
    setComment('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 rounded-lg bg-gray-100 dark:bg-white/5 border dark:border-white/10">
      <h3 className="text-lg font-semibold mb-3">Leave a Review</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input w-full rounded-lg text-black"
            placeholder="e.g., Priya S."
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium mb-1">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="form-select w-full rounded-lg text-black"
          >
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium mb-1">Comment</label>
        <textarea
          id="comment"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="form-textarea w-full rounded-lg text-black"
          placeholder="Write about your experience..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors mt-4"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;