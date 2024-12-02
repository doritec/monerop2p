interface Offer {
  username: string;
  completedTrades: number;
  rating: number;
  price: number;
  paymentMethods: Array<{ type: 'bank' | 'card' | 'cash'; name: string }>;
  limits: { min: number; max: number };
  type: 'buy' | 'sell';
  terms?: string;
  lastSeen?: string;
  registrationDate?: string;
  badges?: string[];
  margin?: string;
  location?: string;
}

export const mockOffers: Offer[] = [
  {
    username: "TrustedTrader",
    completedTrades: 11289,
    rating: 4.97,
    price: 164486.91,
    paymentMethods: [
      { type: 'bank', name: 'Bank Transfer' },
      { type: 'card', name: 'Credit Card' }
    ],
    limits: { min: 500, max: 20000 },
    type: 'buy',
    terms: `Bank transfer from most Australian banks (I do not accept anz or bankwest)

Transfers can clear from a few hours up to 24 hours, or can send using payid which is instant for most banks.

In all instances, btc will be released AFTER funds have cleared, so if you are able to pay via NPP or payid, please advise. If you dont know how to, then ask.

Please do not complicate the payid……its designed to be faster and easier. I know its new to most people in australia, and therefore they complicate it by inventing a bunch of requirements and registrations in their head. Then they DONT listen to my instructions on how to do it. You dont have to use payid, but then its normal transfer times with normal processing times.

For ALL trades, i will need to verify id if its our first transfer trade together.

to find out how to do this, please submit a trade and i will explain.

Please do NOT put a trade then complain about having to verify ID, there will be NO exceptions, unless I already know you.`,
    lastSeen: "2 mins ago",
    registrationDate: "Sep 19, 2019",
    badges: ["Fast Trader", "Verified"],
    margin: "10% above market",
    location: "Australia"
  },
  {
    username: "CryptoKing",
    completedTrades: 8456,
    rating: 4.95,
    price: 163500.00,
    paymentMethods: [
      { type: 'bank', name: 'PayPal' },
      { type: 'card', name: 'Wise Transfer' }
    ],
    limits: { min: 100, max: 50000 },
    type: 'sell',
    lastSeen: "5 mins ago",
    registrationDate: "Jan 15, 2020",
    badges: ["Premium Trader", "Verified"],
    margin: "5% below market",
    location: "United States"
  },
  {
    username: "MoneroMaster",
    completedTrades: 6234,
    rating: 4.89,
    price: 164000.50,
    paymentMethods: [
      { type: 'bank', name: 'SEPA Transfer' },
      { type: 'card', name: 'Revolut' }
    ],
    limits: { min: 200, max: 30000 },
    type: 'buy',
    lastSeen: "15 mins ago",
    registrationDate: "Mar 3, 2020",
    badges: ["Fast Trader"],
    margin: "2% above market",
    location: "Germany"
  },
  {
    username: "PrivacyPro",
    completedTrades: 4521,
    rating: 4.92,
    price: 163750.75,
    paymentMethods: [
      { type: 'cash', name: 'Cash in Person' },
      { type: 'bank', name: 'Western Union' }
    ],
    limits: { min: 1000, max: 25000 },
    type: 'sell',
    lastSeen: "1 hour ago",
    registrationDate: "Apr 12, 2020",
    badges: ["Verified"],
    margin: "3% below market",
    location: "Canada"
  },
  {
    username: "XMRTrader",
    completedTrades: 3876,
    rating: 4.88,
    price: 164200.25,
    paymentMethods: [
      { type: 'bank', name: 'Zelle' },
      { type: 'card', name: 'Cash App' }
    ],
    limits: { min: 50, max: 15000 },
    type: 'buy',
    lastSeen: "30 mins ago",
    registrationDate: "Jun 25, 2020",
    badges: ["Fast Trader", "Verified"],
    margin: "1% above market",
    location: "United States"
  },
  {
    username: "SecureSwap",
    completedTrades: 5643,
    rating: 4.91,
    price: 163900.00,
    paymentMethods: [
      { type: 'bank', name: 'Interac e-Transfer' },
      { type: 'card', name: 'Apple Pay' }
    ],
    limits: { min: 300, max: 40000 },
    type: 'sell',
    lastSeen: "45 mins ago",
    registrationDate: "Feb 8, 2020",
    badges: ["Premium Trader"],
    margin: "4% below market",
    location: "Canada"
  },
  {
    username: "MoneroWhale",
    completedTrades: 7890,
    rating: 4.94,
    price: 164150.50,
    paymentMethods: [
      { type: 'bank', name: 'Bank Transfer' },
      { type: 'card', name: 'TransferWise' }
    ],
    limits: { min: 5000, max: 100000 },
    type: 'buy',
    lastSeen: "20 mins ago",
    registrationDate: "Dec 1, 2019",
    badges: ["Premium Trader", "Verified"],
    margin: "2% above market",
    location: "United Kingdom"
  },
  {
    username: "P2PExpert",
    completedTrades: 4123,
    rating: 4.87,
    price: 163800.25,
    paymentMethods: [
      { type: 'bank', name: 'Venmo' },
      { type: 'card', name: 'Google Pay' }
    ],
    limits: { min: 100, max: 20000 },
    type: 'sell',
    lastSeen: "1 hour ago",
    registrationDate: "May 15, 2020",
    badges: ["Fast Trader"],
    margin: "3% below market",
    location: "United States"
  }
];