import Vue from 'vue'
import VueRouter from 'vue-router'
import { isUserLoggedIn, isAuth } from '@/auth/utils'
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
        roles:["admin","company","agent"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
      },
    },
    {
      path: '/released-shipments',
      name: 'released-shipments',
      component: () => import('@/views/Admins/released-shipments.vue'),
      meta: {
        pageTitle: 'المشرفين',
        breadcrumb: [
          {
            text: 'الشحنات المفرج عنها',
            active: true,
          },
        ],
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
      },
    },
    {
      path: '/add-row/:id?',
      name: 'add-row',
      props:true,
      component: () => import('@/views/Admins/add-row.vue'),
      meta: {
        pageTitle: 'التقارير المجمعه',
        breadcrumb: [
          {
            text: 'إضافة داتا للتقرير',
            active: true,
          },
        ],
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
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
        roles:["admin"],
        requiresAuth:true
      },
    },

    //agent-user
    {
      path: '/agent-report',
      name: 'agent-report',
      component: () => import('@/views/Agent-User/report.vue'),
      meta: {
        pageTitle: 'التقارير',
        breadcrumb: [
          {
            text: 'مهماتي',
            active: true,
          },
        ],
        roles:["agent"],
        requiresAuth:true

      },
    },
    {
      path: '/edit-agent-comment',
      name: 'edit-agent-comment',
      props:true,
      component: () => import('@/views/Agent-User/edit-agent-comment.vue'),
      meta: {
        pageTitle: 'التقارير',
        breadcrumb: [
          {
            text: 'تعديل كومنت على الشحنه',
            active: true,
          },
        ],
        roles:["agent"],
        requiresAuth:true

      },
    },
    {
      path: '/edit-agent-comment',
      name: 'edit-agent-comment',
      props:true,
      component: () => import('@/views/Agent-User/edit-agent-comment.vue'),
      meta: {
        pageTitle: 'التقارير',
        breadcrumb: [
          {
            text: 'تعدبل كومنت على الشحنه',
            active: true,
          },
        ],
        roles:["agent"],
        requiresAuth:true

      },
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: () => import('@/views/Agent-User/coupons.vue'),
      meta: {
        pageTitle: 'القسايم',
        
        roles:["agent"],
        requiresAuth:true

      },
    },
    {
      path: '/add-coupon/:id?',
      name: 'add-coupon',
      props:true,
      component: () => import('@/views/Agent-User/add-coupon.vue'),
      meta: {
        pageTitle: 'القسايم',
        breadcrumb: [
          {
            text: 'إضافة قسيمة',
            active: true,
          },
        ],
        roles:["agent"],
        requiresAuth:true

      },
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('@/views/Agent-User/expenses.vue'),
      meta: {
        pageTitle: 'المصاريف',
        
        roles:["agent"],
        requiresAuth:true

      },
    },
    {
      path: '/add-expense/:id?',
      name: 'add-expense',
      props:true,
      component: () => import('@/views/Agent-User/add-expense.vue'),
      meta: {
        pageTitle: 'المصاريف',
        breadcrumb: [
          {
            text: 'إضافة مصروف',
            active: true,
          },
        ],
        roles:["agent"],
        requiresAuth:true

      },
    },

    //company-user
    {
      path: '/company-report',
      name: 'company-report',
      component: () => import('@/views/Company-User/report.vue'),
      meta: {
        pageTitle: 'التقارير',
        breadcrumb: [
          {
            text: 'مهماتي',
            active: true,
          },
        ],
        roles:["company"],
        requiresAuth:true

      },
    },
    {
      path: '/edit-company-comment',
      name: 'edit-company-comment',
      props:true,
      component: () => import('@/views/Company-User/edit-company-comment.vue'),
      meta: {
        pageTitle: 'التقارير',
        breadcrumb: [
          {
            text: 'تعدبل كومنت على الشحنه',
            active: true,
          },
        ],
        roles:["company"],
        requiresAuth:true

      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
      roles:[]
    },
    {
      path: '/not-authorized',
      name: 'misc-not-authorized',
      component: () => import('@/views/NotAuthorized.vue'),
      meta:{
        //layout: 'full',
        roles:["no"]
      }
     
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      roles:["admin","company","agent"],
      requiresAuth:true
      },

    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})
router.beforeEach((to, _, next) => {
  console.log(to.path)

const isLoggedIn = isUserLoggedIn()
let isAuthed
const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
if(isLoggedIn){
 isAuthed = isAuth(to.meta.roles)
}

if(!isLoggedIn && to.path !== '/login'  
//  && !store.getters.isAuthenticated 
//to.meta.role 
  ){
  return next({
    name: 'login',
  }).catch((err)=>{
    console.log(err)
  })
}
  else if(isLoggedIn &&  to.path !== '/login' && !isAuthed && requiresAuth){
  return next({ name: 'misc-not-authorized' }) 
  }
else{
  next()
 }

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
