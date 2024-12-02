import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Star, Clock, Globe, DollarSign, Share2, BadgeCheck, Phone, Mail } from 'lucide-react';
import { PaymentMethodBadge } from '../components/Offers/PaymentMethodBadge';
import { mockOffers } from '../data/mockOffers';

export const Trade = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  
  const trader = mockOffers.find(offer => offer.username === username);
  
  if (!trader) {
    return <div>Trader not found</div>;
  }

  const handleTrade = () => {
    navigate('/register');
  };

  const calculatedXMR = amount ? parseFloat(amount) / trader.price : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {trader.type === 'buy' ? 'Buy' : 'Sell'} XMR using {trader.paymentMethods[0].name} from {trader.username}
        </h1>
        <p className="text-gray-600 mt-2">
          {trader.type === 'buy' ? 'Buy' : 'Sell'} XMR for ${trader.price.toLocaleString()} using {trader.paymentMethods[0].name}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold">Enter amount</h2>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">${trader.price.toLocaleString()}</div>
                <div className="text-gray-600">per XMR</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How much USD do you want to {trader.type === 'buy' ? 'spend' : 'receive'}?
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {amount && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>You {trader.type === 'buy' ? 'pay' : 'receive'}</span>
                    <span>${parseFloat(amount).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>You {trader.type === 'buy' ? 'receive' : 'pay'}</span>
                    <span>{calculatedXMR.toFixed(6)} XMR</span>
                  </div>
                </div>
              )}

              <button
                onClick={handleTrade}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Open Trade
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">Trade details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Location
                </h4>
                <p>Australia</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Margin
                </h4>
                <p>3% above market</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Trading hours
                </h4>
                <p>Mon - Sun: Trading all day</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Trade expires in
                </h4>
                <p>240 mins</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Trade terms and conditions</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {trader.terms || `Payment via ${trader.paymentMethods.map(m => m.name).join(' or ')}.
                
Please ensure you have verified your identity before starting the trade.

Trade will be completed within 24 hours of payment confirmation.

Feel free to message me if you have any questions!`}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">
                  {trader.username.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {trader.username}
                  <Shield className="w-5 h-5 text-green-500" />
                </h3>
                <p className="text-gray-600">Last seen: 2 mins ago</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold">{trader.rating}</span>
                <span className="text-gray-600">({trader.completedTrades} trades)</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <BadgeCheck className="w-5 h-5" />
                <span>Fast Trader</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Registered: Sep 19, 2019</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>Verified Email</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>Verified Phone</span>
              </div>
            </div>

            <div className="pt-6 border-t">
              <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Share2 className="w-5 h-5" />
                Share this offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};