import type { LogicFlow } from '@logicflow/core'

import { ContextMenu as _ContextMenu } from '@logicflow/extension'

export interface ContextMenuItem {
  icon: string
  callback?: (data: any) => void
  type?: string
  className?: string
  properties: Record<string, any>
};

export class ContextMenu extends _ContextMenu {
  _lf: LogicFlow
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    this._lf = lf

    const userTask = {
      icon: 'https://api.iconify.design/bpmn/user-task.svg',
      type: 'userTask',
    }
    const serviceTask = {
      icon: 'https://api.iconify.design/bpmn/service-task.svg',
      type: 'serviceTask',
    }
    const branchTask = {
      icon: 'https://api.iconify.design/bpmn/manual-task.svg',
      type: 'branchTask',
    }
    const exclusiveGateway = {
      icon: 'https://api.iconify.design/bpmn/gateway-xor.svg',
      type: 'exclusiveGateway',
    }
    const parallelGateway = {
      icon: 'https://api.iconify.design/bpmn/gateway-parallel.svg',
      type: 'exclusiveGateway',
    }
    const note = {
      icon: 'https://api.iconify.design/bpmn/text-annotation.svg',
      type: 'note',
    }
    const endEvent = {
      icon: 'https://api.iconify.design/bpmn/end-event.svg',
      type: 'endEvent',
    }
    const remove = {
      icon: 'https://api.iconify.design/ep/delete.svg',
      callback(data: LogicFlow.NodeConfig) {
        lf.deleteNode(data.id!)
      },
    }
    const copy = {
      icon: 'https://api.iconify.design/ep/copy-document.svg',
      callback(data: LogicFlow.NodeConfig) {
        lf.cloneNode(data.id!)
      },
    }

    const userTaskMenus = [userTask, serviceTask, branchTask, exclusiveGateway, parallelGateway, note, endEvent, copy, remove]
    const serviceTaskMenus = [note, copy, remove]
    this.setContextMenuByType('userTask', userTaskMenus)
    this.setContextMenuByType('serviceTask', serviceTaskMenus)
  }

  /** 修改节点类型 */
  changeNodeType(ele: LogicFlow.NodeConfig, type: string) {
    this._lf.changeNodeType(ele.id!, type)
    Object.keys(ele.properties || {}).forEach(key => this._lf.deleteProperty(ele.id!, key))
    this._lf.emit('element:click', { data: { ...ele, type, properties: {} } } as any)
  }
}
