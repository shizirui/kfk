import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/element/MainView.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/element/EmpView.vue'),
  },
  {
    path: '/my/order',
    name: 'myorder',
    component: () => import('../views/element/MyOrder.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/element/LoginIn.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/element/RegisterView.vue')
  },
  {
    path: '/my/information',
    name: 'myinformation',
    component: () => import('../views/element/MyInformation.vue')
  },
  {
    path: '/manage/main',
    name: 'managemain',
    component: () => import('../views/element/ManageMain.vue')
  },
  {
    path: '/manage/order',
    name: 'manageorder',
    component: () => import('../views/element/ManageOrder.vue')
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


