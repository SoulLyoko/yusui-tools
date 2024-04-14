export { }

declare module 'vue' {
  interface GlobalComponents {
    AvueCrud: typeof import('@smallwei/avue')['AvueCrud']
    AvueForm: typeof import('@smallwei/avue')['AvueForm']
    AvueTree: typeof import('@smallwei/avue')['AvueTree']
  }

  interface ComponentCustomProperties {
    $AVUE: Required<import('@smallwei/avue').AvueConfig>
    $Clipboard: (arg: { text: string }) => Promise<void>
    $DialogForm: <T = any>(
      option: Partial<import('element-plus').DialogProps> &
      Partial<import('element-plus').DrawerProps> &
      {
        type?: 'dialog' | 'drawer'
        data?: T
        menuPosition?: import('@smallwei/avue').MenuPosition
        option?: import('@smallwei/avue').AvueFormOption<T>
        callback?: (cb: { data: T, close: () => void, done: () => void }) => void
      }
    ) => void
    $Export: {
      excel: (arg: { title: string, columns: { label: string, prop: string }[], data: any[] }) => void
      xlsx: (raw: File) => Promise<{ results: any[] }>
    }
    $ImagePreview: (list: { url?: string, thumbUrl?: string }[], index?: number) => void
    $Log: {
      capsule: (title?: string, content?: string, type?: string) => void
      colorful: (content?: string) => void
      danger: (content?: string) => void
      default: (content?: string) => void
      primary: (content?: string) => void
      success: (content?: string) => void
      warning: (content?: string) => void
    }
    $Print: (selector: string | HTMLElement) => void
    $Screenshot: (selector: string | HTMLElement, options?: any) => void
    $Watermark: (option?: {
      id?: string
      fontSize?: string
      width?: string
      height?: string
      text?: string
    }) => void
  }
}
