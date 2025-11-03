// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('tenant'); // 1. Add state for user type
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      // 2. Pass the username AND userType to the login function
      auth.login(username, userType);
      navigate('/'); // Redirect to homepage after login
    } else {
      alert('Please enter a username.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="p-8 rounded-xl bg-white dark:bg-white/5 border dark:border-white/10 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* 3. Add the new User Type dropdown */}
          <div>
            <label htmlFor="userType" className="block text-sm font-medium mb-1">I am a...</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="form-select w-full rounded-lg text-black"
            >
              <option value="tenant">Tenant (Looking for a room)</option>
              <option value="owner">Room Owner (Listing a room)</option>
            </select>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username (or Email)</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input w-full rounded-lg text-black"
              placeholder="Enter any username"
            />
          </div>
          <div>
            {/* This is the line I fixed (removed the 'S' from '</label>') */}
            <label htmlFor="password_mock" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password_mock"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full rounded-lg text-black"
              placeholder="Enter any password"
            />
          </div>
          <button
            type="submit"
            className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;