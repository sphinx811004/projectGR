// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// This component is now our main layout
function Layout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        
        {/* The <Outlet /> is where the current page's content will be injected */}
        <Outlet /> 

      </main>
      <Footer />
    </div>
  );
}

// We export Layout as the default
export default Layout;