export { }

declare module 'vue' {
  export interface GlobalComponents {
    Chart: typeof import('vue-echarts')['default']
    Icon: typeof import('@iconify/vue')['Icon']
  }
}

declare module '@iconify/vue' {
  export declare interface IconifyIconProps {
    icon?: string
  }
}
