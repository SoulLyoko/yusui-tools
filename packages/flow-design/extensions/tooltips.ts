import type { TooltipItem } from '../types'
import type { LogicFlow } from '@logicflow/core'

export class Tooltips {
  static pluginName = 'tooltips'

  lf: LogicFlow
  container?: HTMLElement
  __tooltipDOM: HTMLElement
  __tooltips: TooltipItem[] = []

  constructor({ lf }: { lf: LogicFlow }) {
    this.__tooltipDOM = document.createElement('div')
    this.__tooltipDOM.className = 'lf-tooltip'
    this.__tooltipDOM.style.position = 'absolute'
    this.__tooltipDOM.style.display = 'none'
    this.lf = lf
  }

  render(lf: LogicFlow, container: HTMLElement) {
    this.container = container
    container.appendChild(this.__tooltipDOM)
    lf.on('node:mouseenter,edge:mouseenter', ({ data, e }) => {
      const content = this.__tooltips.find(item => item.id === data.id)?.content
      if (!content)
        return
      this.__tooltipDOM.innerHTML = content
      const point = lf.getPointByClient(e.x, e.y)!
      const { domOverlayPosition: { x, y } } = point
      this.__tooltipDOM.style.top = `${y + 10}px`
      this.__tooltipDOM.style.left = `${x + 10}px`
      this.__tooltipDOM.style.display = 'block'
    })
    lf.on('node:mouseleave,edge:mouseleave', () => {
      this.__tooltipDOM.style.display = 'none'
    })
  }

  setTooltips(tooltips: TooltipItem[]) {
    this.__tooltips = tooltips
  }
}
