<script setup lang="ts">
import { LineChart } from 'vue-chart-3';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, Filler,
} from 'chart.js';

interface Props {
  chartData: any;
}

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
);

const { chartData } = defineProps<Props>()

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      mode: 'nearest',
      intersect: false,
      position: 'nearest',
    }
  },
  interaction: {
    mode: 'nearest',
    intersect: false,
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Values',
      },
    },
  },
};
</script>

<template>
  <div>
    <LineChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<style scoped>
div {
  width: 100%;
  margin: 0 auto;
}
</style>