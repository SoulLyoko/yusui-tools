import type { RouteRecordRaw } from 'vue-router'
import type { EditableTreeNode } from 'unplugin-vue-router'

/** 自动注册路由组件的名称 */
export function setupRouterComponents(routes: RouteRecordRaw[]) {
  return routes.map((route) => {
    if (typeof route.component === 'function') {
      const asyncComponent = (route.component as () => any)()
      if (asyncComponent instanceof Promise) {
        route.component = () => asyncComponent.then((module) => {
          module.default.name = route.name
          return module
        })
      }
    }
    let children: RouteRecordRaw[] = []
    if (route.children?.length)
      children = setupRouterComponents(route.children)

    return { ...route, children } as RouteRecordRaw
  })
}

export function normalizeRoutes(node: EditableTreeNode) {
  // / -> index
  // /hi/[name] -> hi-name
  // /[...all] => all
  node.name = node.name === '/' ? 'index' : node.name.replace(/^\/|(\.\.\.)|\[|\]|\/$/g, '').replace(/\//g, '-')
  node.path = node.fullPath
}
