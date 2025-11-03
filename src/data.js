// src/data.js

// This is our new, realistic data based on real Raipur listings
export const listingsData = [
  {
    id: 1,
    title: 'TARA KUNJ PG (For Girls)',
    price: 6500,
    beds: 1,
    baths: 1,
    billsIncluded: true,
    address: 'Ashoka Ratna, Shankar Nagar',
    description: 'A well-regarded PG for girls in Shankar Nagar, close to shops and transport. This is a private room in a PG that includes food and other amenities. Safe and budget-friendly.',
    amenities: [
      { name: 'Food Included', icon: 'restaurant' },
      { name: 'Wifi Included', icon: 'wifi' },
      { name: 'Room Cleaning', icon: 'cleaning_services' },
      { name: 'AC Rooms Available', icon: 'ac_unit' },
      { name: 'CCTV Security', icon: 'videocam' },
    ],
    reviews: [
      { id: 1, name: 'Priya S.', rating: 5, comment: 'Very safe and clean PG. Aunty is very helpful. Food is also good.' },
      { id: 2, name: 'Anjali K.', rating: 4, comment: 'Good location, close to market. Rooms are a bit small but manageable.' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Xehmsgwtk7EiAFqnriCGbtVL6xEca0t09WERWEr56L-4PXq9rpbYm4dGt3l-RmnFNHOihqpct7mLm_NAsfANIlV_5E2QkEID0AtUAdOQuQB8zFNxaMHIy1td4MKNydj_u01w_c1PmDEgotePixTT0pZcgYNNmqSvLQZpWC88nzuaH1DB2lZOYXgtbVWJI9LKzUfROUvL7yiRg1sastQcS7yYVr6fdGHNcy7QUpo-3CEgJScV8yu0PMPBIDmGST0RxfBM3-tVPPMs', // Placeholder image
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9RAnNeK41zGbz7Tt0NMETOBUvJO5ydp9Zy3npIGgaT0QZ0F13BEas8iT0ofeBg_rweNiaOSGvpMWv4BseTxWCHPQJJCSqyy9hCEPsXOrB1xtqD9tEP59JPGKUSnG5yhrND9Dp83os9f_VkJDbv_jA_Ng3TlLrKFyjqAHzyCq8xQSFRkP0fLZHqLc_DeXiJ3qhbQWFCJQIvMcST-H8o-xlHpJPp9VMvKT8CyF6rWT1Nm8QTLp9iyAFg8V0a3WNl_Y-R02aGpL5PktC',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCHadZLVV01CtHSaahhE9t1D7MJjBYY0xYf6eKz3GR1xycIhFadxmeuxUR9CzMSHmlEcypLzrJ_j9v4yEW8_kzksXTBgAwPMSYS2BiY7wHPgKAAxIHdVgMxWEjd2MvzecJlipMUUdoNYn2axhBNvC0DasNys-O95pc1TQKq-G_CxhHmUPCqAI1LnlnTgDK08Qvr9foTXN0ENdaCI6_ZbqfIPXIA1oDnynxIjOW0NIQl9vE9FiDgj9V1Tsm4uyC9POx1_IW2WuG0m-N',
    ],
  },
  {
    id: 2,
    title: '1 BHK Flat near AIIMS',
    price: 8000,
    beds: 1,
    baths: 1,
    billsIncluded: false,
    address: 'Tatibandh, Near AIIMS Hospital',
    description: 'An independent 1 BHK flat perfect for a student or medical professional. Located at a walking distance to AIIMS. Includes a private kitchen and bathroom. 24/7 water and parking space.',
    amenities: [
      { name: 'Parking', icon: 'local_parking' },
      { name: '24/7 Water', icon: 'water_drop' },
      { name: 'Private Kitchen', icon: 'kitchen' },
      { name: 'Unfurnished', icon: 'check_box_outline_blank' },
    ],
    reviews: [], // Kept empty to test the "no reviews" message
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU3xANATkCQ-Ik8pQo1rp-CFzjO8zuN2WXIP5D1YbDcZGnscURAg5FEil7G6pbT3npr5n_iXZuVl1UDkTSmIbpG0ECwlgyZKMQdvzzXQYvbXBidJKzhTs8y-z65UkedYvraPaCzd5bBNkCNYTZrPjW0goYbBDuHw4Ai_6XJTXYsy3HI0lMoxMgyIj8MBA_RRSd2338IL-r9-0pED4zg_98mCvSwlTS75QNkh5ZwSI-sgfZQnLL2maSvMcDo25qB-eoeK6WD5357upB', // Placeholder image
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Xehmsgwtk7EiAFqnriCGbtVL6xEca0t09WERWEr56L-4PXq9rpbYm4dGt3l-RmnFNHOihqpct7mLm_NAsfANIlV_5E2QkEID0AtUAdOQuQB8zFNxaMHIy1td4MKNydj_u01w_c1PmDEgotePixTT0pZcgYNNmqSvLQZpWC88nzuaH1DB2lZOYXgtbVWJI9LKzUfROUvL7yiRg1sastQcS7yYVr6fdGHNcy7QUpo-3CEgJScV8yu0PMPBIDmGST0RxfBM3-tVPPMs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9RAnNeK41zGbz7Tt0NMETOBUvJO5ydp9Zy3npIGgaT0QZ0F13BEas8iT0ofeBg_rweNiaOSGvpMWv4BseTxWCHPQJJCSqyy9hCEPsXOrB1xtqD9tEP59JPGKUSnG5yhrND9Dp83os9f_VkJDbv_jA_Ng3TlLrKFyjqAHzyCq8xQSFRkP0fLZHqLc_DeXiJ3qhbQWFCJQIvMcST-H8o-xlHpJPp9VMvKT8CyF6rWT1Nm8QTLp9iyAFg8V0a3WNl_Y-R02aGpL5PktC',
    ],
  },
  {
    id: 3,
    title: 'Krishna Guest Homes (Boys Hostel)',
    price: 3500,
    beds: 1,
    baths: 1, // Shared
    billsIncluded: true,
    address: 'Kota - Gudhiyari Main Road, Kota',
    description: 'Affordable and clean accommodation for boys, located in the Kota area, very close to NIT Raipur. This is for a bed in a shared room. Includes Wi-Fi and food services.',
    amenities: [
      { name: 'Food Service', icon: 'restaurant' },
      { name: 'Wifi Included', icon: 'wifi' },
      { name: 'Shared Rooms', icon: 'people' },
      { name: 'Near NIT', icon: 'school' },
    ],
    reviews: [
      { id: 3, name: 'Rohan V.', rating: 4, comment: 'Very close to NIT, so convenient. Mess food is decent.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9RAnNeK41zGbz7Tt0NMETOBUvJO5ydp9Zy3npIGgaT0QZ0F13BEas8iT0ofeBg_rweNiaOSGvpMWv4BseTxWCHPQJJCSqyy9hCEPsXOrB1xtqD9tEP59JPGKUSnG5yhrND9Dp83os9f_VkJDbv_jA_Ng3TlLrKFyjqAHzyCq8xQSFRkP0fLZHqLc_DeXiJ3qhbQWFCJQIvMcST-H8o-xlHpJPp9VMvKT8CyF6rWT1Nm8QTLp9iyAFg8V0a3WNl_Y-R02aGpL5PktC', // Placeholder image
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCHadZLVV01CtHSaahhE9t1D7MJjBYY0xYf6eKz3GR1xycIhFadxmeuxUR9CzMSHmlEcypLzrJ_j9v4yEW8_kzksXTBgAwPMSYS2BiY7wHPgKAAxIHdVgMxWEjd2MvzecJlipMUUdoNYn2axhBNvC0DasNys-O95pc1TQKq-G_CxhHmUPCqAI1LnlnTgDK08Qvr9foTXN0ENdaCI6_ZbqfIPXIA1oDnynxIjOW0NIQl9vE9FiDgj9V1Tsm4uyC9POx1_IW2WuG0m-N',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU3xANATkCQ-Ik8pQo1rp-CFzjO8zuN2WXIP5D1YbDcZGnscURAg5FEil7G6pbT3npr5n_iXZuVl1UDkTSmIbpG0ECwlgyZKMQdvzzXQYvbXBidJKzhTs8y-z65UkedYvraPaCzd5bBNkCNYTZrPjW0goYbBDuHw4Ai_6XJTXYsy3HI0lMoxMgyIj8MBA_RRSd2338IL-r9-0pED4zg_98mCvSwlTS75QNkh5ZwSI-sgfZQnLL2maSvMcDo25qB-eoeK6WD5357upB',
    ],
  },
  {
    id: 4,
    title: 'Aashray Boys Hostel (Twin Sharing)',
    price: 3000,
    beds: 1,
    baths: 1, // Shared
    billsIncluded: true,
    address: 'Pandri, Near Bus Stand',
    description: 'Clean, comfortable, and affordable twin-sharing rooms for students in the heart of Raipur. Very close to the main bus stand and commercial hubs.',
    amenities: [
      { name: 'Food Included', icon: 'restaurant' },
      { name: 'Wifi Included', icon: 'wifi' },
      { name: 'Twin Sharing', icon: 'people' },
      { name: 'Secure Campus', icon: 'security' },
    ],
    reviews: [
      { id: 4, name: 'Vikram P.', rating: 5, comment: 'Clean rooms and good value for money. Recommended.' },
      { id: 5, name: 'Amit G.', rating: 4, comment: 'Good hostel, friendly owner. Close to the bus stand.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCHadZLVV01CtHSaahhE9t1D7MJjBYY0xYf6eKz3GR1xycIhFadxmeuxUR9CzMSHmlEcypLzrJ_j9v4yEW8_kzksXTBgAwPMSYS2BiY7wHPgKAAxIHdVgMxWEjd2MvzecJlipMUUdoNYn2axhBNvC0DasNys-O95pc1TQKq-G_CxhHmUPCqAI1LnlnTgDK08Qvr9foTXN0ENdaCI6_ZbqfIPXIA1oDnynxIjOW0NIQl9vE9FiDgj9V1Tsm4uyC9POx1_IW2WuG0m-N', // Placeholder image
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Xehmsgwtk7EiAFqnriCGbtVL6xEca0t09WERWEr56L-4PXq9rpbYm4dGt3l-RmnFNHOihqpct7mLm_NAsfANIlV_5E2QkEID0AtUAdOQuQB8zFNxaMHIy1td4MKNydj_u01w_c1PmDEgotePixTT0pZcgYNNmqSvLQZpWC88nzuaH1DB2lZOYXgtbVWJI9LKzUfROUvL7yiRg1sastQcS7yYVr6fdGHNcy7QUpo-3CEgJScV8yu0PMPBIDmGST0RxfBM3-tVPPMs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU3xANATkCQ-Ik8pQo1rp-CFzjO8zuN2WXIP5D1YbDcZGnscURAg5FEil7G6pbT3npr5n_iXZuVl1UDkTSmIbpG0ECwlgyZKMQdvzzXQYvbXBidJKzhTs8y-z65UkedYvraPaCzd5bBNkCNYTZrPjW0goYbBDuHw4Ai_6XJTXYsy3HI0lMoxMgyIj8MBA_RRSd2338IL-r9-0pED4zg_98mCvSwlTS75QNkh5ZwSI-sgfZQnLL2maSvMcDo25qB-eoeK6WD5357upB',
    ],
  },
];