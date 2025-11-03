// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-white/10 px-4 h-20">
        
        {/* Wrap the logo in a Link to the homepage */}
        <Link to="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">cottage</span>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Ghar Rentals</h2>
        </Link>
        
        <nav className="hidden md:flex items-center gap-9">
          {/* Change this 'a' tag to a 'Link' tag */}
          <Link 
            className="text-sm font-medium leading-normal hover:text-primary transition-colors" 
            to="/listings"
          >
            Listings
          </Link>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Help/FAQ</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">List your property</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-white/20 transition-colors">
            <span className="truncate">Log In</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;