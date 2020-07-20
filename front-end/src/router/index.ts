import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
