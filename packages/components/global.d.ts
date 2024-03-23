declare module 'vue' {
  interface GlobalComponents {
    ContextMenu: typeof import('@yusui/components').ContextMenu
    IconSelect: typeof import('@yusui/components').IconSelect
    ProCrud: typeof import('@yusui/components').ProCrud
    ProDict: typeof import('@yusui/components').ProDict
    ProHtml: typeof import('@yusui/components').ProHtml
    ProMenu: typeof import('@yusui/components').ProMenu
    ProText: typeof import('@yusui/components').ProText
    ProTree: typeof import('@yusui/components').ProTree
  }
}

export {}
