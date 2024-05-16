import type { LogicFlow } from '@logicflow/core'
import type { StyleItem } from '../types'

export class Styles {
  static pluginName = 'styles'

  lf: LogicFlow

  constructor({ lf }: { lf: LogicFlow }) {
    this.lf = lf
  }

  setStyles(styles: StyleItem[]) {
    styles.forEach(({ id, style }) => {
      id && this.lf?.graphModel?.getElement(id) && this.lf?.graphModel?.updateAttributes(id, { style })
    })
  }
}
