import React from 'react';
import { FilterSelect } from './FilterSelect';
import { countries } from '../../data/countries';
import { paymentMethods } from '../../data/paymentMethods';

interface FiltersBarProps {
  onTradeTypeChange: (type: 'buy' | 'sell') => void;
}

export const FiltersBar = ({ onTradeTypeChange }: FiltersBarProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FilterSelect
          label="I want to"
          value="Buy"
          onChange={(value) => onTradeTypeChange(value.toLowerCase() as 'buy' | 'sell')}
          options={['Buy', 'Sell']}
        />
        
        <FilterSelect
          label="Cryptocurrency"
          value="Monero (XMR)"
          onChange={() => {}}
          options={['Monero (XMR)']}
        />
        
        <FilterSelect
          label="Payment method"
          value="Any"
          onChange={() => {}}
          options={['Any', ...paymentMethods]}
        />
        
        <FilterSelect
          label="Location"
          value="Any"
          onChange={() => {}}
          options={['Any', ...countries]}
        />
      </div>
    </div>
  );
};