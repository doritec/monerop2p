import React from 'react';
import { Coins } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Coins className="w-8 h-8 text-indigo-600" />
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        MoneroP2P
      </span>
    </div>
  );
};