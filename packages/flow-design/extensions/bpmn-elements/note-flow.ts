import { sequenceFlowFactory } from '@logicflow/extension'

/** NoteFlow */
export class NoteFlowModel extends sequenceFlowFactory().model {
  getEdgeStyle() {
    const style = super.getEdgeStyle()
    style.strokeDasharray = '3 3'
    return style
  }

  getTextPosition() {
    const { x, y } = this.text
    return (x && y) ? { x, y } : (this.dbClickPosition || { x: 0, y: 0 })
  }
}
export class NoteFlowView extends sequenceFlowFactory().view {}
export const NoteFlow = { type: 'noteFlow', model: NoteFlowModel, view: NoteFlowView }
