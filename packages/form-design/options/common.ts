import * as icons from '@element-plus/icons-vue'
import { kebabCase } from 'lodash-es'

export const iconList = [
  {
    label: '基本图标',
    list: Object.keys(icons).map(e => `el-icon-${kebabCase(e)}`),
  },
]

export const groupList = ['布局组件', '表单组件', '日期时间组件']
