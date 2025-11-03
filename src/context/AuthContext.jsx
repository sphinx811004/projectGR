// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

// --- Mock User "Database" ---
// We'll log in as one of these two users.
const MOCK_USERS = {
  owner: { id: 1, name: 'Ramesh K.', type: 'owner' },
  tenant: { id: 101, name: 'Priya S.', type: 'tenant' },
};
// ------------------------------

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Login function now finds the user by their type
  const login = (username, userType) => {
    // In a real app, you'd check username/password.
    // Here, we just log in as the MOCK user for that type.
    if (userType === 'owner') {
      setUser(MOCK_USERS.owner);
    } else {
      setUser(MOCK_USERS.tenant);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};