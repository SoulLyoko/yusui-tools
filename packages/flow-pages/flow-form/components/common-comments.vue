<script setup lang="ts" name="common-comments">
import type { Comment } from '../../api/common-comments'
import type Node from 'element-plus/es/components/tree/src/model/node'

import { computed, nextTick, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { ElMessage } from 'element-plus'

import { batchUpdate, create, remove, useCommentList } from '../../api/common-comments'
import { useInjectState } from '../composables'

const props = defineProps({
  modelValue: { type: String },
})
const modelValue = useVModel(props, 'modelValue')

const popoverVisible = ref(false)
const { activeBtn } = useInjectState()
const activeBtnKey = computed(() => activeBtn.value?.buttonKey)
const { data: commentList, refresh } = useCommentList(activeBtnKey)

const commentTreeData = computed(() => {
  const content = modelValue.value
  if (content && !commentList.value?.some(e => e.content === content)) {
    const limitSort = (commentList.value?.[0]?.sort || 1) - 1
    return [{ content, sort: limitSort }, ...(commentList.value || [])]
  }
  return commentList.value
})

async function addComment(data: Comment) {
  await create({ ...data, type: activeBtn.value?.buttonKey })
  ElMessage.success('添加成功')
  refresh()
}
async function delComment(data: Comment) {
  await remove(data.id!)
  ElMessage.success('删除成功')
  refresh()
}
async function nodeDrop(draggingNode: Node, dropNode: Node) {
  let data = dropNode.parent.data as Comment[]
  data = data.map((item, index) => {
    return { id: item.id, sort: index + 1 }
  })
  await batchUpdate(data)
  ElMessage.success('修改排序成功')
  refresh()
  popoverVisible.value = false
}
function nodeDragStart() {
  popoverVisible.value = true
}
const inputRef = ref()
async function nodeClick(data: Comment) {
  modelValue.value = data.content
  await nextTick()
  inputRef.value?.blur()
}
</script>

<template>
  <el-popover :visible="popoverVisible" placement="bottom" title="常用意见" :width="300">
    <template #reference>
      <el-input
        ref="inputRef"
        v-model="modelValue"
        type="textarea"
        placeholder="请输入意见"
        rows="5"
        @focus="popoverVisible = true"
        @blur="popoverVisible = false"
      />
    </template>
    <el-tree
      :data="commentTreeData"
      node-key="content"
      draggable
      :allow-drop="(drag:any, drop:any, type:string) => type !== 'inner'"
      :props="{ label: 'content' }"
      @node-click="nodeClick"
      @node-drop="nodeDrop"
      @node-drag-start="nodeDragStart"
    >
      <template #default="{ data }">
        <el-row style="width: 250px;">
          <el-col :span="20">
            <el-text truncated :title="data.content">
              {{ data.content }}
            </el-text>
          </el-col>
          <el-col :span="4">
            <el-button
              v-if="data.id"
              type="danger"
              size="small"
              icon="el-icon-close"
              text
              @click.stop="delComment(data)"
            />
            <el-button
              v-else
              type="primary"
              size="small"
              icon="el-icon-plus"
              text
              @click.stop="addComment(data)"
            />
          </el-col>
        </el-row>
      </template>
    </el-tree>
  </el-popover>
</template>
