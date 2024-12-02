import React from 'react';
import { UserPlus, Search, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: 1,
    title: "Register",
    description: "Create an account on LocalCoinSwap with instant sign-up and get your free Bitcoin wallet."
  },
  {
    icon: Search,
    number: 2,
    title: "Search Offers",
    description: "Use the search bar to find the best offers. Use the filters to narrow down the perfect offer."
  },
  {
    icon: MessageSquare,
    number: 3,
    title: "Start a Trade",
    description: "Once you find the right offer, check the terms. Then start the trade and begin chatting with the seller."
  }
];

export const HowToBuy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How to buy Bitcoin on LocalCoinSwap
        </h2>
        <p className="text-center text-gray-600 mb-12">
          It's easy and secure. All you need is 5 mins.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="font-bold text-2xl mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Register now
          </button>
        </div>
      </div>
    </section>
  );
};