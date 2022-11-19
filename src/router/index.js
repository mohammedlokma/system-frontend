import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    //admins
    {
      path: '/admins',
      name: 'admins',
      component: () => import('@/views/Admins/admins.vue'),
      meta: {
        pageTitle: 'المشرفين',
        breadcrumb: [
          {
            text: 'المشرفين',
            active: true,
          },
        ],
      },
    },
    {
      path: '/admin-update/:id?',
      name: 'admin-update',
      props:true,
      component: () => import('@/views/Admins/admin-update.vue'),
      meta: {
        pageTitle: 'المشرفين',
        breadcrumb: [
          {
            text: 'إضافة مشرف',
            active: true,
          },
        ],
      },
    },
    //agents
    {
      path: '/agents/:id?',
      name: 'agents',
      props:true,
      component: () => import('@/views/Agents/agents.vue'),
      meta: {
        pageTitle: 'المندوبين',
        breadcrumb: [
          {
            text: 'المندوبين',
            active: true,
          },
        ],
      },
    },
    {
      path: '/agent-update/:id?',
      name: 'agent-update',
      props: true,
      component: () => import('@/views/Agents/agent-update.vue'),
      meta: {
        pageTitle: 'المندوبين',
        breadcrumb: [
          {
            text: 'إضافة مندوب',
            active: true,
          },
        ],
      },
    },
    {
      path: '/agent-details/:id?',
      name: 'agent-details',
      props: true,
      component: () => import('@/views/Agents/agent-details.vue'),
      meta: {
        pageTitle: 'المندوبين',
        breadcrumb: [
          {
            text: 'تفاصيل مدفوعات مندوب',
            active: true,
          },
        ],
      },
    },
    {
      path: '/service-places',
      name: 'service-places',
      props:true,
      component: () => import('@/views/Agents/service-places.vue'),
      meta: {
        pageTitle: 'المندوبين',
        breadcrumb: [
          {
            text:'أماكن الخدمه',
            active: true,
          },
        ],
      },
    },
    {
      path: '/add-service-place/:id?',
      name: 'add-service',
      props:true,
      component: () => import('@/views/Agents/add-service-place.vue'),
      meta: {
        pageTitle: 'اماكن الخدمه',
        breadcrumb: [
          {
            text: 'إضافة مكان',
            active: true,
          },
        ],
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/projects.vue'),
      meta: {
        pageTitle: 'المشاريع',
        breadcrumb: [
          {
            text: 'المشاريع',
            active: true,
          },
        ],
      },
    },
    {
      path: '/projectUpdate',
      props: true,
      name: 'projectUpdate',
      component: () => import('@/views/projectUpdate.vue'),
      meta: {
        pageTitle: 'المشاريع',
        breadcrumb: [
          {
            text: 'تحديث مشروع',
            active: true,
          },
        ],
      },
    },
    
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
