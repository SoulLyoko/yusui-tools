import type { AvueFormColumn, DicItem } from '@smallwei/avue'

export function formColumnToDic(column: AvueFormColumn[]): DicItem[] {
  return column.map((col) => {
    const dicItem: DicItem = {
      label: col.label,
      value: col.prop,
      desc: col.prop,
    }
    if (col.type === 'dynamic' && col.children?.column?.length)
      dicItem.children = formColumnToDic(col.children?.column)
    return dicItem
  })
}
