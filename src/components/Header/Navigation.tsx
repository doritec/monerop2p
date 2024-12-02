import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Buy Crypto</Link>
      <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Sell Crypto</Link>
      <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition-colors">Create Offer</Link>
      <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition-colors">Dashboard</Link>
      <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition-colors">Wallet</Link>
    </nav>
  );
};