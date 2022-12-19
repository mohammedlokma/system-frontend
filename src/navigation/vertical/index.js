export default [
  {
    title: 'الصفحة الرئيسية',
    route: 'home',
    icon: 'HomeIcon',
    roles:["admin","company","agent"]
  },

  {
    title: 'المشرفين',
    route: 'admins',
    icon: 'UserPlusIcon',
    roles:["admin"]
  },
  {
    title: 'المندوبين',
    route: 'agents',
    icon: 'UserIcon',
    roles:["admin"]
  },
  {
    title: 'أماكن الخدمه',
    route: 'service-places',
    icon: 'ServerIcon',
    roles:["admin"]
  },
  {
    title: 'الشركات',
    route: 'companies',
    icon: 'ShoppingBagIcon',
    roles:["admin"]
  },
  {
    title: 'الخزنة',
    route: 'safe',
    icon: 'DatabaseIcon',
    roles:["admin"]
  },
  {
    title: 'التقرير المجمع',
    route: 'full-report',
    icon: 'FileIcon',
    roles:["admin"]
  },
  {
    title: 'الشحنات المفرج عنها',
    route: 'released-shipments',
    icon: 'FileIcon',
    roles:["admin"]
  },
  {
    title: 'التقرير ',
    route: 'company-report',
    icon: 'FileIcon',
    roles:["company"]
  },
  {
    title: 'التقرير',
    route: 'agent-report',
    icon: 'FileIcon',
    roles:["agent"]
  },
  {
    title: 'القسايم',
    route: 'coupons',
    icon: 'FileIcon',
    roles:["agent"]
  },
  {
    title: 'المصاريف',
    route: 'expenses',
    icon: 'FileIcon',
    roles:["agent"]
  },
]
