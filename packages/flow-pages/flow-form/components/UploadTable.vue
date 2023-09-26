<script setup lang="ts">
import type { AvueCrudColumn, AvueCrudOption } from '@smallwei/avue'
import type { FlowFile } from '@yusui/flow-pages'

import { useCrud } from '@yusui/composables'
import { get } from 'lodash-es'
import { uuid } from '@yusui/utils'
import { computed } from 'vue'
import { isMobile, useConfigProvider, useFlowFileApi } from '@yusui/flow-pages'

import { useInjectState } from '../composables'

const { flowDetail, fileIds, detail } = useInjectState()

const { upload: { action, headers, preview, download, props: uploadProps } = {}, request } = useConfigProvider()

const uploadHeaders = typeof headers === 'function' ? headers() : headers
const flowInstanceId = computed(() => flowDetail.value?.task?.flowInstanceId ?? uuid())

const column: AvueCrudColumn<FlowFile>[] = [
  { label: '文件名', prop: 'fileName' },
  { label: '文件类型', prop: 'fileType' },
  { label: '文件大小', prop: 'fileSize' },
  { label: '版本', prop: 'version' },
  { label: '上传时间', prop: 'createTime' },
]
const mobileColumn = column.filter(e => e.prop === 'fileName')
const tableOption: AvueCrudOption<FlowFile> = {
  rowKey: 'id',
  align: 'center',
  index: false,
  border: true,
  stripe: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menuType: 'menu',
  menuBtnTitle: '操作',
  column: isMobile() ? mobileColumn : column
  ,
}
const {
  bindVal,
  getDataList,
  handleDel,
  handleSave,
  afterGetList,
  crudStateRefs: { tableData },
} = useCrud({
  crudOption: { ...useFlowFileApi(request), saveSuccessMsg: '上传成功' },
  tableOption,
  queryForm: {
    isLatest: 1,
    flowInstanceId: flowInstanceId.value,
  },
})

afterGetList(() => {
  fileIds!.value = tableData.value.map(item => item.id).join(',')
})
getDataList()

async function onUploadSuccess(response: any, row?: FlowFile) {
  const { fileName, fileType, fileSize, fileUrl, res } = uploadProps as NonNullable<Required<typeof uploadProps>>
  const data = {
    fileName: get({ res: response }, `${res}.${fileName}`),
    fileType: get({ res: response }, `${res}.${fileType}`),
    fileSize: get({ res: response }, `${res}.${fileSize}`),
    fileUrl: get({ res: response }, `${res}.${fileUrl}`),
    taskId: flowDetail.value?.task?.taskId,
    flowInstanceId: flowInstanceId.value,
    // 更新版本
    rootMark: row?.rootMark || '',
    version: typeof row?.version === 'number' ? row.version + 1 : 1,
  }
  await handleSave(data, getDataList, () => {})
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-upload
        v-if="!detail"
        :action="action"
        :headers="uploadHeaders"
        :show-file-list="false"
        @success="onUploadSuccess($event)"
      >
        <el-button type="primary" icon="el-icon-upload">
          点击上传
        </el-button>
      </el-upload>
    </template>
    <template #menu-btn="{ row, index }">
      <el-dropdown-item icon="el-icon-view" @click="preview?.(row, tableData)">
        预览
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-download" @click="download?.(row, tableData)">
        下载
      </el-dropdown-item>
      <el-dropdown-item v-if="!detail" icon="el-icon-upload">
        <el-upload
          :action="action"
          :headers="uploadHeaders"
          :show-file-list="false"
          @success="onUploadSuccess($event, row)"
        >
          更新版本
        </el-upload>
      </el-dropdown-item>
      <el-dropdown-item v-if="!detail" icon="el-icon-delete" @click="handleDel(row, index)">
        删除
      </el-dropdown-item>
    </template>
  </avue-crud>
</template>
