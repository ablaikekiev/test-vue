<script setup lang="ts">
import { onMounted } from "vue";

import CoinsTable from "@/content/CoinsTable/CoinsTable.vue";
import UILayout from "@/components/UILayout/UILayout.vue";

import { useMarket } from "@/store/coins.ts";

const market = useMarket();

onMounted(() => {
  market.getCoins()
  market.getPairs()
})
</script>

<template>
  <UILayout>
    <CoinsTable/>
  </UILayout>
</template>

<style scoped>

</style>