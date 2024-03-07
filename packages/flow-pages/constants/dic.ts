import { enumToDic } from '@yusui/utils'

import { FieldType, TablePrimary } from '../api'

/** 是否 */
export enum Whether {
  否 = 0,
  是 = 1,
}
export const whetherDic = enumToDic(Whether)
export const fieldTypeDic = enumToDic(FieldType)
export const tablePrimaryDic = enumToDic(TablePrimary)
export const taskNodeTypeDic = [
  { label: '审批', value: 'userTask' },
  { label: '传阅', value: 'circulateTask' },
]
