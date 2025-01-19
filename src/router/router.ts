import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('../pages/dashboard/DashboardPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;