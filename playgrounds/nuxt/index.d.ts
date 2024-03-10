/// <reference types="@yusui/types/avue" />

declare module 'vue' {
  interface GlobalComponents {
    Icon: typeof import('@iconify/vue')['Icon']
  }
}

declare module '@iconify/vue' {
  interface IconifyIconProps {
    icon?: string
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
