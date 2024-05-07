export { }

declare module 'vue' {
  interface GlobalComponents {
    AvueCrud: typeof import('@smallwei/avue')['AvueCrud']
    AvueForm: typeof import('@smallwei/avue')['AvueForm']
    AvueTree: typeof import('@smallwei/avue')['AvueTree']
  }

  interface ComponentCustomProperties {
    $AVUE: Required<import('@smallwei/avue').AvueConfig>
    $Clipboard: typeof import('@smallwei/avue')['$Clipboard']
    $DialogForm: typeof import('@smallwei/avue')['$DialogForm']
    $Export: typeof import('@smallwei/avue')['$Export']
    $ImagePreview: typeof import('@smallwei/avue')['$ImagePreview']
    $Log: typeof import('@smallwei/avue')['$Log']
    $Print: typeof import('@smallwei/avue')['$Print']
    $Screenshot: typeof import('@smallwei/avue')['$Screenshot']
    $Watermark: typeof import('@smallwei/avue')['$Watermark']
  }
}
