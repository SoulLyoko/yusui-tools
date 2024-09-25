import type { MiniMap } from '@logicflow/extension'

import { LogicFlow } from '@logicflow/core'
import { Control as _Control, bpmnUtils } from '@logicflow/extension'

export class Control extends _Control {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf, LogicFlow, options: {} })
    const controls = [
      {
        key: 'clear',
        iconClass: 'lf-control-clear',
        title: '清空',
        text: '清空',
        onClick: () => {
          lf.clearData()
          lf.addNode({ type: 'process', id: `Process_${bpmnUtils.genBpmnId()}`, x: 0, y: 0 })
        },
      },
      {
        key: 'mini-map',
        iconClass: 'lf-control-mini-map',
        title: '导航',
        text: '导航',
        onClick: () => {
          // @ts-ignore
          const { isShow, show, hide } = lf.extension.miniMap as MiniMap
          isShow ? hide() : show()
        },
      },
      {
        key: 'process',
        iconClass: 'lf-control-setting',
        title: '流程配置',
        text: '流程配置',
        onClick: () => {
          const processNode = lf.graphModel.nodes.find(node => node.type === 'process' as any)
          let data
          if (!processNode?.id)
            data = lf.addNode({ type: 'process', id: `Process_${bpmnUtils.genBpmnId()}`, x: 0, y: 0 })
          else
            data = lf.getNodeDataById(processNode!.id)
          lf.emit('element:click', { data } as any)
        },
      },
      {
        key: 'edit',
        iconClass: 'lf-control-edit',
        title: '高级',
        text: '高级',
        onClick: () => lf.emit('custom:edit-click', {}),
      },
      // {
      //   key: 'layout',
      //   iconClass: 'lf-control-layout',
      //   title: '自动布局',
      //   text: '自动布局',
      //   onClick: () => lf.extension.dagre.layout(),
      // },
    ]
    controls.forEach(item => this.addItem(item))
  }
}
