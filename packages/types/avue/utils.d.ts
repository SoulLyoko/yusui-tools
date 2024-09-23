declare module '@smallwei/avue' {
  export type AnyFn = (...args: any[]) => any
  export type Fn = () => void

  export const $Clipboard: (arg: { text: string }) => Promise<void>
  export const $DialogForm: <T = any>(
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
  export const $Export: {
    excel: (arg: { title: string, columns: { label: string, prop: string }[], data: any[] }) => void
    xlsx: (raw: File) => Promise<{ results: any[] }>
  }
  export const $ImagePreview: (list: { url?: string, thumbUrl?: string }[], index?: number) => void
  export const $Log: {
    capsule: (title?: string, content?: string, type?: string) => void
    colorful: (content?: string) => void
    danger: (content?: string) => void
    default: (content?: string) => void
    primary: (content?: string) => void
    success: (content?: string) => void
    warning: (content?: string) => void
  }
  export const $Print: (selector: string | HTMLElement) => void
  export const $Screenshot: (selector: string | HTMLElement, options?: any) => void
  export const $Watermark: (option?: {
    id?: string
    fontSize?: string
    width?: string
    height?: string
    text?: string
  }) => void
}
