import React, { createElement } from 'react'
import pathToRegexp from 'path-to-regexp' // 路径参数转正则的标准工具
import { getMenuData } from './menu'
import asyncComponent from './asyncComponent'
import appInfo from '../../package.json'

let routerDataCache
const NODE_ENV = process.env.NODE_ENV
const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
    !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1)
  })

function getFlatMenuData(menus) {
  let keys = {}
  menus.forEach(item => {
    if (item.children) {
      keys[item.path] = { ...item }
      keys = { ...keys, ...getFlatMenuData(item.children) }
    } else {
      keys[item.path] = { ...item }
    }
  })
  return keys
}

export const getRouterData = app => {
  let routerConfig = {
    '/': {
      component: asyncComponent(() => import('../layouts/BasicLayout')),
    },
    '/result/success': {
      component: asyncComponent(() => import('../routes/Result/Success')),
    },
    '/result/fail': {
      component: asyncComponent(() => import('../routes/Result/Error')),
    },
    '/exception/403': {
      component: asyncComponent(() => import('../routes/Exception/403')),
    },
    '/exception/404': {
      component: asyncComponent(() => import('../routes/Exception/404')),
    },
    '/exception/500': {
      component: asyncComponent(() => import('../routes/Exception/500')),
    },
    '/exception/trigger': {
      component: asyncComponent(() =>
                import('../routes/Exception/triggerException')
      ),
    },
    '/user': {
      component: asyncComponent(() => import('../layouts/UserLayout')),
    },
    '/user/login': {
      component: asyncComponent(() => import('../routes/User/Login')),
    },
  }

  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData(getMenuData())

  // Route configuration data
  // eg. {name,authority ...routerConfig }
  const routerData = {}
  // The route matches the menu
  Object.keys(routerConfig).forEach(path => {
    // Regular match item name
    // eg.  router /user/:id === /user/chen
    const pathRegexp = pathToRegexp(path)
    // 转正则,有参数的url也不会有影响匹配
    const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`))
    let menuItem = {}
    // If menuKey is not empty
    if (menuKey) {
      menuItem = menuData[menuKey]
    }
    let router = routerConfig[path]
    // If you need to configure complex parameter routing,
    // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
    // eg . /list/:type/user/info/:id
    router = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority,
      hideInBreadcrumb: router.hideInBreadcrumb || menuItem.hideInBreadcrumb,
    }
    routerData[path] = router
    // if (NODE_ENV === 'development') {
    //   routerData[path] = router
    // } else {
    //   routerData[`/${appInfo.registerConfig.name}${path}`] = router
    // }
  })
  return routerData
}
