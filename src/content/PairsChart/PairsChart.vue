<script setup lang="ts">
import { LineChart } from 'vue-chart-3'
import {useMarket} from "@/store/coins";

const market = useMarket()
const data = market.pairs;
</script>

<template>
  <LineChart />
</template>

<style scoped lang="scss"></style>