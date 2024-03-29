export * from './menu-item'
export * from './menu'

// #region route-meta
declare module 'vue-router' {
  interface RouteMeta {
    /** 菜单标题 */
    title?: string
    /** 菜单图标 */
    icon?: string
    /** 禁用菜单 */
    disabled?: boolean
  }
}
// #endregion route-meta
