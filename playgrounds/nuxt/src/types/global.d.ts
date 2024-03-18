/// <reference types="@yusui/types/avue" />

declare module 'vue' {
  interface GlobalComponents {
    Icon: typeof import('@iconify/vue')['Icon']
    Chart: typeof import('vue-echarts')['default']
  }

  interface ComponentCustomProperties {
    $message: typeof import('element-plus')['ElMessage']
    $notify: typeof import('element-plus')['ElNotification']
    $msgbox: typeof import('element-plus')['ElMessageBox']
    $messageBox: typeof import('element-plus')['ElMessageBox']
    $alert: typeof import('element-plus')['ElMessageBox']['alert']
    $confirm: typeof import('element-plus')['ElMessageBox']['confirm']
    $prompt: typeof import('element-plus')['ElMessageBox']['prompt']
    $loading: typeof import('element-plus')['ElLoadingService']
  }
}

declare module '@iconify/vue' {
  interface IconifyIconProps {
    icon?: string
  }
}

export {}
