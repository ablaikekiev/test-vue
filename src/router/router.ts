import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('../pages/dashboard/DashboardPage.vue')
  },
  {
    name: 'CoinDetail',
    path: '/coin/:pair',
    component: () => import('../pages/coins-detail/CoinsDetailPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;