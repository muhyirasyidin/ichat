import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

/**
 * @Store
 */
import store from '@/store';

const pages = (page: string) => {
  return import(`@/views/${page}.vue`);
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: pages('LoginView'),
  },
  {
    path: '/',
    name: 'home',
    component: () => pages('HomeView'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    // make sure the user is authenticated
    !store.getters['auth/getAuthenticated'] &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login'
  ) {
    // redirect the user to the login page
    next({
      path: '/login',
      replace: true,
    });
  } else {
    next();
  }
});

export default router;
