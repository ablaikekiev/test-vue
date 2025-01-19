import { defineStore } from "pinia";
import { ref } from "vue";

import pairs from '@/json/market.json'
import coins from '@/json/currency.json'

import type { Coin, Pair } from "@/types/types.ts";

interface MarketState {
  coins: Coin[];
  pairs: Pair[];
}

export const useMarket = defineStore('coins', () => {
  const marketData = ref<MarketState>({
    coins: [],
    pairs: [],
  })
  
  const getCoins = () => {
    // axios.get('https://user26614.requestly.tech/test/api/market')
    //   .then(({ data }) => this.coins = data)
    marketData.value.coins = [...coins]
  }
  
  const getPairs = () => {
      // axios.get('https://user26614.requestly.tech/test/api/currency')
      //   .then(({ data }) => this.pairs = data)
    marketData.value.pairs = [...pairs]
  }
  const sortPairs = (payload: string) => {
    if (payload.length) {
      marketData.value.pairs = pairs.filter((el: Pair) => el.pair.secondary.toLowerCase().includes(payload.toLowerCase()) || el.pair.primary.toLowerCase().includes(payload.toLowerCase()))
    } else {
      marketData.value.pairs = [...pairs]
    }
  }
  
  return {
    marketData,
    getPairs,
    getCoins,
    sortPairs,
  }
})
