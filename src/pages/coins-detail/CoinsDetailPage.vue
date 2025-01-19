<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import UILayout from "@/components/UILayout/UILayout.vue";
import UIIcon from "@/components/UIIcon/UIIcon.vue";
import TextEditor from "@/components/TextEditor/TextEditor.vue";
import PairsChart from "@/content/PairsChart/PairsChart.vue";
import PairsInfo from "@/content/PairsInfo/PairsInfo.vue";

import { useMarket } from "@/store/market.ts";

import type { Pair } from "@/types/types.ts";

const market = useMarket();

const route = useRoute();

const currentPair = ref<Pair>({} as Pair);
const chartData = ref();

onMounted(() => {
  market.getCoins()
  market.getPairs()

  const pair = (route.params.pair as string).split('-');

  currentPair.value = market.marketData.pairs.find(el => pair.includes(el.pair.primary) && pair.includes(el.pair.secondary)) as Pair
  const labels = currentPair.value.priceHistory.map(() => ' ')
  const data = currentPair.value.priceHistory.map((el: string) => Number(el))
  chartData.value = {
    labels: labels,
    datasets: [{
      label: '',
      data: data,
      borderColor: '#0BBFCA',
      backgroundColor: '#0BBFCA30',
      tension: 0.2,
      fill: true
    }]
  }

  console.log(chartData.value)

  console.log(currentPair.value)
})

</script>

<template>
<UILayout>
  <RouterLink to="/" class="linkBack">
    <UIIcon name="arrowLeft" :size="24" />

    <TextEditor variant="body-1">
      Back
    </TextEditor>
  </RouterLink>

  <PairsInfo :pair="currentPair" />

  <PairsChart :chart-data="chartData" />
</UILayout>
</template>

<style scoped lang="scss">
.linkBack {
  padding: 32px 16px 32px 0;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  grid-gap: 8px;

  color: var(--label-primary);

  &:hover {
    color: var(--label-teriary);
  }
}

</style>