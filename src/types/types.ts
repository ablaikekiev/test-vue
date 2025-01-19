export interface Coin {
  code: string;
  sort_order: number;
  ticker: string;
  type: string;
  decimals_places: number;
  icon: string;
}

export interface Pair {
  pair: {
    primary: string;
    secondary: string;
  };
  price: {
    last: string;
    bestBid: string;
    bestOffer: string;
    change: {
      direction: string;
      percent: string;
      amount: string;
    }
  };
  volume: {
    primary: string;
    secondary: string;
  };
  priceHistory: string[]
}