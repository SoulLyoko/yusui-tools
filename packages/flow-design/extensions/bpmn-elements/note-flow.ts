import { sequenceFlowFactory } from '@logicflow/extension'

/** NoteFlow */
export class NoteFlowModel extends sequenceFlowFactory().model {
  getEdgeStyle() {
    const style = super.getEdgeStyle()
    style.strokeDasharray = '3 3'
    return style
  }
}
export class NoteFlowView extends sequenceFlowFactory().view {}
export const NoteFlow = { type: 'noteFlow', model: NoteFlowModel, view: NoteFlowView }
