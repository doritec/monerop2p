import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { AuthButtons } from './AuthButtons';

export const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
};