<script setup lang="ts">
import type { FlowButtonKey } from '../api/flow-button'

import { ref } from 'vue'
import { ElMessage } from 'element-plus'

import { useButtonHandler, useEmits, useProps, useProvideState } from './composables'
import InternalForm from './components/internal-form.vue'
import ApprovalForm from './components/approval-form.vue'
import FlowTrack from './components/flow-track.vue'

const props = defineProps(useProps())
const emit = defineEmits(useEmits())
const state = useProvideState(props, emit)

const {
  visible,
  flowDetail,
  modelValue: formData,
  approvalFormData,
  formVariables,
  buttonList,
  activeButtonKey,
  activeButton,
  approvalVisible,
  submitLoading,
} = state

const formRef = ref<InstanceType<typeof InternalForm>>()
async function onButtonClick(key: FlowButtonKey) {
  await formRef.value?.validate()
  await props.beforeClick?.(key)
  activeButtonKey.value = key
  if (activeButton.value?.approval)
    approvalVisible.value = true
  else
    onSubmit()
}

async function onSubmit() {
  const buttonHandler = useButtonHandler(state)
  try {
    submitLoading.value = true
    await props.beforeSubmit?.(activeButtonKey.value!)
    await buttonHandler[activeButtonKey.value!]?.()
    ElMessage.success('操作成功')
    approvalVisible.value = false
    emit('complete', activeButtonKey.value)
  }
  finally {
    submitLoading.value = false
  }
}
</script>

<template>
  <el-drawer v-model="visible" title="我是标题" size="60%">
    <el-skeleton v-if="formLoading" />
    <el-container v-else class="flow-form">
      <el-header class="flow-form__header">
        <el-button
          v-for="btn in buttonList"
          :key="btn.buttonKey"
          :type="btn.buttonType"
          @click="onButtonClick(btn.buttonKey as FlowButtonKey)"
        >
          <v-icon :icon="btn.icon" />
          {{ btn.name }}
        </el-button>
      </el-header>
      <el-main class="flow-form__main">
        <el-tabs v-model="activeTab">
          <slot v-if="flowDetail?.process?.formPath" />
          <el-tab-pane v-else label="审批信息" name="form">
            <InternalForm ref="formRef" v-model="formData" :flow-detail="flowDetail" />
          </el-tab-pane>

          <el-tab-pane label="附件资料" name="file" lazy />

          <el-tab-pane label="流程跟踪" name="track" lazy>
            <FlowTrack :flow-detail="flowDetail" />
          </el-tab-pane>
        </el-tabs>
      </el-main>

      <ApprovalForm
        v-model="approvalFormData"
        v-model:visible="approvalVisible"
        :variables="formVariables"
        :flow-detail="flowDetail"
        @confirm="onSubmit"
      />
    </el-container>
  </el-drawer>
</template>

<style lang="scss">
.flow-form {
  height: 100%;

  .flow-form__header {
    height: 32px;
    padding: 0;
  }

  .flow-form__main {
    padding: 0;

    .el-tabs {
      height: 100%;

      .el-tabs__content {
        height: calc(100% - var(--el-tabs-header-height) - 15px);

        .el-tab-pane {
          height: 100%;
          overflow-y: auto;
        }
      }
    }
  }
}
</style>
