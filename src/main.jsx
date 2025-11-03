// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './App.jsx'; // Our main layout from App.jsx
import HomePage from './components/HomePage.jsx'; // Our new homepage
import PropertyPage from './components/PropertyPage.jsx'; // Our property page
import ListingsPage from './components/ListingsPage.jsx';

// 1. Define our routes
const router = createBrowserRouter([
  {
    path: '/',          // This is the parent route
    element: <Layout />, // It uses our Layout (Header/Footer)
    children: [
      {
        index: true,     // This is the "index" page (the default)
        element: <HomePage /> // Show the HomePage component
      },
      {
        path: 'property/:id', // This is the URL for a property
        element: <PropertyPage /> // Show the PropertyPage component
      },
      { // <-- 3. Add this new route object
        path: 'listings',
        element: <ListingsPage />
      }
    ]
  }
]);

// 2. Render the app using the RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);