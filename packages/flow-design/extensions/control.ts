import type { LogicFlow } from '@logicflow/core'

import { Control as _Control } from '@logicflow/extension'
import { ElMessageBox } from 'element-plus'

export class Control extends _Control {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    const controls = [
      {
        key: 'clear',
        iconClass: 'lf-control-clear',
        title: '清空',
        text: '清空',
        onClick: () => lf.clearData(),
      },
      {
        key: 'edit',
        iconClass: 'lf-control-edit',
        title: '编辑',
        text: '编辑',
        onClick: () => lf.emit('custom:edit-click', {}),
      },
      {
        key: 'mini-map',
        iconClass: 'lf-control-mini-map',
        title: '导航',
        text: '导航',
        onClick: () => {
          const { isShow, show, hide } = lf.extension.miniMap ?? {}
          isShow ? hide() : show()
        },
      },
      {
        key: 'reset',
        iconClass: 'lf-control-reset',
        title: '重置',
        text: '重置',
        onClick: () => {
          ElMessageBox.confirm('选择重置的配置', '提示', { confirmButtonText: '重置表单配置', cancelButtonText: '重置按钮配置' })
            .then(() => {
              lf.emit('custom:reset-form-property', {})
            }).catch(() => {
              lf.emit('custom:reset-button', {})
            })
        },
      },
      {
        key: 'layout',
        iconClass: 'lf-control-layout',
        title: '自动布局',
        text: '自动布局',
        onClick: () => lf.extension.dagre.layout(),
      },
    ]
    controls.forEach(item => this.addItem(item))
  }
}
