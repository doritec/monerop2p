import React from 'react';
import { FooterSection } from './FooterSection';
import { Logo } from '../Header/Logo';

const footerSections = {
  community: [
    'Academy',
    'Wallet',
    'Supported Cryptos',
    'Ranks',
    'Calculator',
    'Our Blog',
    'Referral Program',
    'Release Updates'
  ],
  guides: [
    'Introduction to P2P trading',
    'How to Create a Trade Offer',
    'Payment Methods',
    'P2P Escrow Explained'
  ],
  support: [
    'Fees',
    'FAQs',
    'Testimonials',
    'Support Portal',
    'List your Token',
    'Exchange API'
  ],
  legal: [
    'Privacy Policy',
    'Terms of Service & Use'
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Logo />
            <div className="mt-4">
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>English</option>
              </select>
            </div>
          </div>
          
          <FooterSection title="Our Community" links={footerSections.community} />
          <FooterSection title="P2P Trading Guides" links={footerSections.guides} />
          <FooterSection title="Support" links={footerSections.support} />
          <FooterSection title="Legal" links={footerSections.legal} />
        </div>
      </div>
    </footer>
  );
};