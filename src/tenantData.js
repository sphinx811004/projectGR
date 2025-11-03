// src/tenantData.js

export const tenantData = [
  {
    id: 101, // A unique ID for the tenant
    name: 'Priya S.',
    memberSince: '2024',
    bio: 'Quiet and tidy computer science student at NIT Raipur. Looking for a place to study.',
    // Reviews left *by owners* for this tenant
    ownerReviews: [
      {
        id: 1,
        ownerName: 'Ramesh K. (Owner of TARA KUNJ PG)',
        rating: 5,
        comment: 'Priya was a perfect tenant. Very clean, quiet, and always paid rent on time. Highly recommended.'
      },
      {
        id: 2,
        ownerName: 'Sunita (Owner of a PG)',
        rating: 5,
        comment: 'Excellent tenant. No issues at all.'
      }
    ]
  },
  {
    id: 102,
    name: 'Anjali K.',
    memberSince: '2025',
    bio: 'Medical student at AIIMS. Friendly and responsible.',
    ownerReviews: [] // This tenant has no reviews yet
  }
];