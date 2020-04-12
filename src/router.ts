import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/menu',
    //   name: 'menu',
    //   component: () => import('./views/Menu.vue'),
    // },
    // {
    //   path: '/catering',
    //   name: 'catering',
    //   component: () => import('./views/Catering.vue'),
    // },
    // {
    //   path: '/schedule',
    //   name: 'schedule',
    //   component: () => import('./views/Schedule.vue'),
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/About.vue'),
    // },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
