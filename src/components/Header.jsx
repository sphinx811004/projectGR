// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // 1. Import our auth hook

function Header() {
  const auth = useAuth(); // 2. Get the auth state
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/'); // Go to homepage after logout
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-white/10 px-4 h-20">
        
        <Link to="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">cottage</span>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Ghar Rentals</h2>
        </Link>
        
        <nav className="hidden md:flex items-center gap-9">
          <Link 
            className="text-sm font-medium leading-normal hover:text-primary transition-colors" 
            to="/listings"
          >
            Listings
          </Link>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
          <a className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Help/FAQ</a>
        </nav>
        
        <div className="flex items-center gap-3">
          {auth.user ? (
            // If user IS logged in:
            <>
              <span className="text-sm font-medium hidden sm:block">
                Hi, {auth.user.name} ({auth.user.type})
              </span>

              {/* --- THIS IS THE FIXED PART --- */}
              {/* Only show "My Dashboard" link if user is an 'owner' */}
              {auth.user.type === 'owner' && (
                <Link
                  to="/dashboard"
                  className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="truncate">My Dashboard</span>
                </Link>
              )}
              {/* --- END OF FIX --- */}

              <button 
                onClick={handleLogout}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
              >
                Log Out
              </button>
            </>
          ) : (
            // If user is NOT logged in:
            <>
              <Link
                to="/login"
                className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">List your property</span>
              </Link>
              <Link
                to="/login"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;