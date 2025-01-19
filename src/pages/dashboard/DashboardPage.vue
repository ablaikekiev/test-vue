<script setup lang="ts">
import CoinsTable from "@/content/CoinsTable/CoinsTable.vue";
import UIButton from "@/components/UIButton/UIButton.vue";
import UILayout from "@/components/UILayout/UILayout.vue";
import { useMarket } from "@/store/coins.ts";
import { onMounted } from "vue";

const market = useMarket();
</script>

<template>
<UILayout>
  <CoinsTable />

  <UIButton variant="filled">blabla</UIButton>
<!--  <ChartsPeriodView />-->
</UILayout>
</template>

<style scoped>

</style>