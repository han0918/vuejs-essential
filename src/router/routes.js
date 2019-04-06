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
        component:() => import('@/veiws/users/Avatar'),
        meta:{ auth:true }
      }
    ]
  }
]
