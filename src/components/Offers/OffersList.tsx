import React from 'react';
import { OfferCard } from './OfferCard';
import { mockOffers } from '../../data/mockOffers';

interface OffersListProps {
  type: 'buy' | 'sell';
}

export const OffersList = ({ type }: OffersListProps) => {
  const filteredOffers = mockOffers.filter(offer => offer.type === type);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredOffers.map((offer, index) => (
        <OfferCard key={index} {...offer} />
      ))}
    </div>
  );
};