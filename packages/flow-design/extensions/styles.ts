import type { LogicFlow, ShapeStyleAttribute } from '@logicflow/core'

export interface StyleItem {
  id?: string
  style?: ShapeStyleAttribute
}

export class Styles {
  static pluginName = 'styles'

  lf: LogicFlow

  constructor({ lf }: { lf: LogicFlow }) {
    this.lf = lf
  }

  setStyles(styles: StyleItem[]) {
    styles.forEach(({ id, style }) => {
      id && this.lf?.graphModel?.updateAttributes(id, { style })
    })
  }
}
