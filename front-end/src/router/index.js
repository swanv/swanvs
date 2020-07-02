import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    // https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
    // 以上网址中的写法更加简单。
    const token = window.localStorage.getItem('token')
    if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else if (token && to.name === 'Login') {
      // 用户已登录，但又去访问登录页面时不让他过去
      next({
        path: from.fullPath
      })
    } else {
      next()
    }
  })

  return Router
}
