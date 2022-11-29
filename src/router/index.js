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
    {
      path: '/full-report',
      name: 'full-report',
      component: () => import('@/views/Admins/full-report.vue'),
      meta: {
        pageTitle: 'المشرفين',
        breadcrumb: [
          {
            text: 'التقارير المجمعه',
            active: true,
          },
        ],
      },
    },
    {
      path: '/add-report-item',
      name: 'add-report-item',
      component: () => import('@/views/Admins/add-report-item.vue'),
      meta: {
        pageTitle: 'التقارير المجمعه',
        breadcrumb: [
          {
            text: 'إضافة خانه للتقرير',
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
      path: '/add-cost/:id?',
      name: 'add-cost',
      props:true,
      component: () => import('@/views/Agents/add-cost.vue'),
      meta: {
        pageTitle: 'تفاصيل مندوب',
        breadcrumb: [
          {
            text: 'إضافة عهده',
            active: true,
          },
        ],
      },
    },

    //companies
    {
      path: '/companies',
      name: 'companies',
      component: () => import('@/views/Company/companies.vue'),
      meta: {
        pageTitle: 'الشركات',
        breadcrumb: [
          {
            text: 'الشركات',
            active: true,
          },
        ],
      },
    },
    {
      path: '/comapny-details/:id?',
      name: 'company-details',
      props:true,
      component: () => import('@/views/Company/company-details.vue'),
      meta: {
        pageTitle: 'الشركات',
        breadcrumb: [
          {
            text: 'تفاصيل شركة',
            active: true,
          },
        ],
      },
    },
    {
      path: '/add-to-account/:id?',
      name: 'add-to-account',
      props:true,
      component: () => import('@/views/Company/add-to-account.vue'),
      meta: {
        pageTitle: 'تفاصيل شركة',
        breadcrumb: [
          {
            text: 'إضافة دفع',
            active: true,
          },
        ],
      },
    },
    {
      path: '/add-bill/:id?',
      name: 'add-bill',
      props:true,
      component: () => import('@/views/Company/add-bill.vue'),
      meta: {
        pageTitle: 'تفاصيل شركة',
        breadcrumb: [
          {
            text: 'إضافة فاتورة',
            active: true,
          },
        ],
      },
    },
    {
      path: '/add-company-report-details/:id?',
      name: 'add-company-report-details',
      props:true,
      component: () => import('@/views/Company/add-company-report-details.vue'),
      meta: {
        pageTitle: 'الشركات',
        breadcrumb: [
          {
            text: 'تفاصيل عناصر الريبورت',
            active: true,
          },
        ],
      },
    },

    //safe
    {
      path: '/safe',
      name: 'safe',
      component: () => import('@/views/Safe/safe.vue'),
      meta: {
        pageTitle: 'الخزنة',
        breadcrumb: [
          {
            text: 'تفاصيل الخزنة',
            active: true,
          },
        ],
      },
    },

    {
      path: '/add-income',
      name: 'add-income',
      component: () => import('@/views/Safe/add-income.vue'),
      meta: {
        pageTitle: 'الخزنة',
        breadcrumb: [
          {
            text: 'إضافة مبلغ الخزنة',
            active: true,
          },
        ],
      },
    },
    {
      path: '/add-out',
      name: 'add-out',
      component: () => import('@/views/Safe/add-out.vue'),
      meta: {
        pageTitle: 'الخزنة',
        breadcrumb: [
          {
            text: 'سحب مبلغ من الخزنة',
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
