// src/components/OwnerDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { bookingsData } from '../bookings.js';
import { listingsData } from '../data.js';
import { tenantData } from '../tenantData.js';

function OwnerDashboard() {
  const { user } = useAuth();

  // 1. Check if user is an owner. If not, show an error.
  if (!user || user.type !== 'owner') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Access Denied</h1>
        <p>You must be logged in as an owner to view this page.</p>
        <Link to="/login" className="text-primary hover:underline">Go to Login</Link>
      </div>
    );
  }

  // 2. Find completed bookings for this owner's properties
  const myBookings = bookingsData.filter(
    (b) => b.ownerId === user.id && b.status === 'completed'
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Owner Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Review Your Past Tenants</h2>

      <div className="space-y-4">
        {myBookings.length > 0 ? (
          myBookings.map((booking) => {
            // 3. Get the data for each booking
            const property = listingsData.find((p) => p.id === booking.propertyId);
            const tenant = tenantData.find((t) => t.id === booking.tenantId);

            if (!property || !tenant) return null;

            return (
              <div key={booking.bookingId} className="flex items-center justify-between p-4 rounded-lg bg-gray-100 dark:bg-white/5 border dark:border-white/10">
                <div>
                  <h3 className="text-lg font-bold">{tenant.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stayed at: {property.title}
                  </p>
                </div>
                {/* This button links to the tenant's profile where the review would be */}
                <Link 
                  to={`/tenant/${tenant.id}`}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  Leave a Review
                </Link>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">You have no completed bookings to review.</p>
        )}
      </div>
    </div>
  );
}

export default OwnerDashboard;