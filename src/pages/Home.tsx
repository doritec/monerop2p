import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FiltersBar } from '../components/Filters/FiltersBar';
import { OffersList } from '../components/Offers/OffersList';
import { HowToBuy } from '../components/HowToBuy';

export const Home = () => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {tradeType === 'buy' ? 'Buy' : 'Sell'} Monero
          </h2>
          <p className="text-gray-600">
            Browse trusted {tradeType === 'buy' ? 'sellers' : 'buyers'} in your region
          </p>
        </div>
        <FiltersBar onTradeTypeChange={setTradeType} />
        <OffersList type={tradeType} />
      </main>
      <HowToBuy />
    </>
  );
};