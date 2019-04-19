export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  },
  // 首页路由配置
  {
    path: '/',
    name: 'Home',
    alias: '/topics',
    component: () => import('@/views/Home')
  },
  // 其他未配置路由都跳转到首页
  {
    path:'*',
    redirect:'/'
  },
  {
    path:'/auth/login',
    name:'Login',
    component:() => import('@/views/auth/Login')
  },
  // EditUsers
  {
    path:'/users/:id/edit',
    component:() => import('@/views/users/Edit'),
    children:[
      {
        path:'',
        name:'EditProfile',
        component:() => import('@/views/users/Profile'),
        meta:{ auth:true }
      },
      // EditAvatar
      {
        path: '/users/1/edit_avatar',
        name: 'EditAvatar',
        component:() => import('@/views/users/Avatar'),
        meta:{ auth:true }
      },
      // EditPassword
      {
        path:'/users/1/edit_password',
        name: 'EditPassword',
        component:() => import('@/views/users/password'),
        meta:{ auth:true }
      }
    ]
  },
  // Create
  {
    path:'/articles/create',
    name:'Create',
    component: () => import('@/views/articles/Create'),
    meta:{ auth:true }
  },

  // Edit
  {
    path:'/articles/:articleId/edit',
    name:'Edit',
    component:() => import('@/views/articles/Create'),
    meta:{ auth:true }
  },
  // Column
  {
    path:'/:user',
    component:() => import('@/views/articles/Column'),
    children: [
      {
        path:'',
        name:'Column',
        component:()=>import('@/views/articles/List')
      },
      // Content
      {
        path:'/articles/:articleId/content',
        name:'Content',
        component:() => import('@/views/articles/Content')
      }
    ]
  }
]
