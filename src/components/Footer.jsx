// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-white/5 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">cottage</span>
            <p className="text-base font-bold">Ghar Rentals</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a className="hover:text-primary transition-colors" href="#">Contact</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Ghar Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// This is the line that's probably missing or misspelled
export default Footer;