import type { LogicFlow } from '@logicflow/core'

import { bpmnUtils, Group, SubProcessFactory } from '@logicflow/extension'

/** SubProcess */
export class SubProcessModel extends SubProcessFactory().model {
  setZIndex(zIndex?: number) {
    if (typeof zIndex === 'number' && zIndex < 0)
      this.zIndex = zIndex
  }

  createId() {
    return `Group_${bpmnUtils.genBpmnId()}`
  }

  addChild(id: string) {
    super.addChild(id)
    this.graphModel.nodesMap[id]?.model?.setProperty('groupKey', this.id)
  }

  removeChild(id: string) {
    super.removeChild(id)
    this.graphModel.nodesMap[id]?.model?.deleteProperty('groupKey')
  }
}
export class SubProcessView extends SubProcessFactory().view { }
export class SubProcess extends Group {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    lf.register({ type: 'group', model: SubProcessModel, view: SubProcessView })
  }
}
