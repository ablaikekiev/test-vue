import { defineStore } from "pinia";
import type { Coin, Pair } from "@/types/types.ts";

import pairs from '@/json/market.json'
import coins from '@/json/currency.json'

interface MarketState {
  coins: Coin[];
  pairs: Pair[];
}

export const useMarket = defineStore('coins', {
  state: (): MarketState => {
    return {
      coins: [],
      pairs: [],
    }
  },
  actions: {
    getCoins() {
      // axios.get('https://user26614.requestly.tech/test/api/market')
      //   .then(({ data }) => this.coins = data)
      this.coins = [...coins]
    },
    getPairs() {
      // axios.get('https://user26614.requestly.tech/test/api/currency')
      //   .then(({ data }) => this.pairs = data)
      this.pairs = [...pairs]
    }
  }
})
