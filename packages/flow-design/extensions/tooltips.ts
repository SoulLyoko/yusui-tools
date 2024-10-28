import type { TooltipItem } from '../types'
import type { LogicFlow } from '@logicflow/core'

import { HtmlNode, HtmlNodeModel } from '@logicflow/core'
import { uniqBy } from 'lodash-es'

export class TooltipsView extends HtmlNode {
  setHtml(rootEl: SVGForeignObjectElement) {
    let { content, height, width } = this.props.model.properties as TooltipItem ?? {}
    const tooltipDOM = document.createElement('div')
    tooltipDOM.className = 'lf-tooltip show-always'
    tooltipDOM.innerHTML = content ?? ''
    rootEl.appendChild(tooltipDOM)
    height = height ?? rootEl.scrollHeight
    this.props.model.updateAttributes({ width, height, y: this.props.model.y + height / 2 })
  }
}

export class TooltipsModel extends HtmlNodeModel {}

export class Tooltips {
  static pluginName = 'tooltips'

  lf: LogicFlow
  tooltips: TooltipItem[] = []

  constructor({ lf }: { lf: LogicFlow }) {
    this.lf = lf
    lf.register({ type: 'tooltips', model: TooltipsModel, view: TooltipsView })
  }

  render(lf: LogicFlow, container: HTMLElement) {
    const tooltipDOM = document.createElement('div')
    tooltipDOM.className = 'lf-tooltip show-hover'
    tooltipDOM.style.position = 'absolute'
    tooltipDOM.style.display = 'none'
    container.appendChild(tooltipDOM)
    lf.on('node:mouseenter', ({ data, e }) => {
      const { show, content, width, height } = this.tooltips.find(item => item.id === data.id) ?? {}
      if (show === 'always' || !content)
        return
      tooltipDOM.innerHTML = content
      const point = lf.getPointByClient(e.x, e.y)!
      const { domOverlayPosition: { x, y } } = point
      tooltipDOM.style.top = `${y + 10}px`
      tooltipDOM.style.left = `${x + 10}px`
      tooltipDOM.style.display = 'block'
      tooltipDOM.style.width = `${width}px`
      tooltipDOM.style.height = height ? `${height}px` : 'auto'
    })
    lf.on('node:mouseleave', () => {
      tooltipDOM.style.display = 'none'
    })
  }

  setTooltips(tooltips: TooltipItem[] = []) {
    this.tooltips = uniqBy([...tooltips].reverse(), 'id').reverse().map(item => ({ show: 'hover', width: 150, ...item })) ?? []
    this.tooltips.forEach((item) => {
      if (item.show === 'hover' || !item.content)
        return
      const node = this.lf.graphModel.getNodeModelById(item.id!)
      const { x, y, height } = node ?? {}
      if (!x || !y || !height)
        return
      this.lf.graphModel.addNode({
        type: 'tooltips',
        x,
        y: y + height / 2,
        properties: item,
      })
    })
  }
}
