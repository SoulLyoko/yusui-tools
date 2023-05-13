<script setup lang="ts">
import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowDetail, FlowFile } from '../../api'

import { useCrud } from '@yusui/composables'
import { get } from 'lodash-es'

import { useFlowFileApi } from '../../api'
import { useConfigProvider } from '../../composables'

const props = defineProps<{ flowDetail?: FlowDetail }>()

const { upload: { action, headers, preview, download, props: uploadProps } } = useConfigProvider()

const tableOption: AvueCrudOption<FlowFile> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 200,
  column: [
    { label: '文件名', prop: 'fileName' },
    { label: '文件类型', prop: 'fileType' },
    { label: '文件大小', prop: 'fileSize' },
    { label: '版本', prop: 'version' },
    { label: '上传时间', prop: 'createTime' },
  ],
}
const {
  bindVal,
  getDataList,
  handleDel,
  handleSave,
  crudStateRefs: { tableData },
} = useCrud({
  crudOption: { ...useFlowFileApi(), saveSuccessMsg: '上传成功' },
  tableOption,
  queryForm: {
    isLatest: 1,
    flowInstanceId: props.flowDetail?.task?.flowInstanceId,
  },
})

getDataList()

async function onUploadSuccess(response: any, row?: FlowFile) {
  const { fileName, fileType, fileSize, fileUrl, res } = uploadProps as NonNullable<Required<typeof uploadProps>>
  const data = {
    fileName: get({ res: response }, `${res}.${fileName}`),
    fileType: get({ res: response }, `${res}.${fileType}`),
    fileSize: get({ res: response }, `${res}.${fileSize}`),
    fileUrl: get({ res: response }, `${res}.${fileUrl}`),
    taskId: props.flowDetail?.task?.taskId,
    flowInstanceId: props.flowDetail?.task?.flowInstanceId,
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
        :action="action"
        :headers="headers"
        :show-file-list="false"
        @success="onUploadSuccess($event)"
      >
        <el-button type="primary" icon="el-icon-upload">
          点击上传
        </el-button>
      </el-upload>
    </template>
    <template #menu="{ row, index }">
      <el-button type="primary" text icon="el-icon-view" @click="preview?.(row, tableData)">
        预览
      </el-button>
      <el-button type="primary" text icon="el-icon-download" @click="download?.(row, tableData)">
        下载
      </el-button>
      <el-upload
        :action="action"
        :headers="headers"
        :show-file-list="false"
        style="display:inline;vertical-align:middle;margin-right:10px"
        @success="onUploadSuccess($event, row)"
      >
        <el-button type="primary" text icon="el-icon-upload">
          更新版本
        </el-button>
      </el-upload>
      <el-button type="primary" text icon="el-icon-delete" @click="handleDel(row, index)">
        删除
      </el-button>
    </template>
  </avue-crud>
</template>
