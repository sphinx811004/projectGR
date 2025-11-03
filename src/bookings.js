// src/bookings.js

export const bookingsData = [
  {
    bookingId: 1,
    propertyId: 1, // TARA KUNJ PG
    ownerId: 1,      // Ramesh K.
    tenantId: 101,   // Priya S.
    status: 'completed',
  },
  {
    bookingId: 2,
    propertyId: 1, // TARA KUNJ PG
    ownerId: 1,      // Ramesh K.
    tenantId: 102,   // Anjali K.
    status: 'completed',
  },
  {
    bookingId: 3,
    propertyId: 3, // Krishna Guest Homes
    ownerId: 2,      // A different owner
    tenantId: 101,   // Priya S.
    status: 'active', // This one isn't completed
  },
];