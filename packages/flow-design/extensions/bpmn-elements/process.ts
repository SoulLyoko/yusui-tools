import { HtmlNode, HtmlNodeModel } from '@logicflow/core'

/** Process */
export class ProcessModel extends HtmlNodeModel {
  setAttributes() {
    this.width = 0
    this.height = 0
  }
}
export class ProcessView extends HtmlNode { }
export const ProcessNode = { type: 'process', model: ProcessModel, view: ProcessView }
