import { bpmnUtils, RectResize } from '@logicflow/extension'

/** Note */
const RectResizeModel = RectResize.model as any
const RectResizeView = RectResize.view as any
export class NoteModel extends RectResizeModel {
  createId() {
    return `Note_${bpmnUtils.genBpmnId()}`
  }

  initNodeData(data: any) {
    super.initNodeData(data)
    this.height = 40
    this.text.draggable = false
  }

  isAllowConnectedAsSource() {
    return false
  }

  getNodeStyle() {
    const style = super.getNodeStyle()
    style.strokeDasharray = '3 3'
    style.fill = 'transparent'
    return style
  }
}
export class NoteView extends RectResizeView {}
export const Note = { type: 'note', model: NoteModel, view: NoteView }
