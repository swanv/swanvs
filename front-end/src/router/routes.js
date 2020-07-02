
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/Home.vue') }
    ]
  },
  {
    path: '/ping',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/Ping.vue') }
    ]
  },
  {
    path: '/test',
    component: () => import('pages/test.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/Login.vue') }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/Register.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
