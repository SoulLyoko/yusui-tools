<script setup lang="ts">
import type { FlowButton } from '../api/flow-button'

import { ref } from 'vue'
import { ElMessage } from 'element-plus'

import { useButtonHandler, useEmits, useProps, useProvideState } from './composables'
import InternalForm from './components/internal-form.vue'
import ApprovalForm from './components/approval-form.vue'
import FlowTrack from './components/flow-track.vue'
import ButtonList from './components/button-list.vue'

const props = defineProps(useProps())
const emit = defineEmits(useEmits())
const state = useProvideState(props, emit)

const {
  flowDetail,
  modelValue: formData,
  formLoading,
  formTitle,
  approvalFormData,
  formVariables,
  approvalVisible,
  submitLoading,
} = state

const formRef = ref<InstanceType<typeof InternalForm>>()
async function onButtonClick(btn: FlowButton) {
  await formRef.value?.validate()
  await props.beforeClick?.(btn)
  if (btn?.approval !== 'false')
    approvalVisible.value = true
  else
    onSubmit(btn)
}

async function onSubmit(btn: FlowButton) {
  const buttonHandler = useButtonHandler(state)
  try {
    const { buttonKey } = btn
    submitLoading.value = true
    await props.beforeSubmit?.(btn!)
    await buttonHandler[buttonKey!]?.()
    ElMessage.success('操作成功')
    approvalVisible.value = false
    emit('complete', btn!)
  }
  finally {
    submitLoading.value = false
  }
}
</script>

<template>
  <el-main v-if="formLoading">
    <el-skeleton />
  </el-main>
  <el-container v-else class="flow-form">
    <el-header class="flow-form__header">
      <h3 class="flow-form__title">
        {{ formTitle }}
      </h3>
      <ButtonList :flow-detail="flowDetail" @click="onButtonClick" />
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
      v-model="approvalFormData" v-model:visible="approvalVisible" :variables="formVariables"
      :flow-detail="flowDetail" @confirm="onSubmit"
    />
  </el-container>
</template>

<style lang="scss">
.flow-form {
  height: 100%;

  .flow-form__title {
    padding: 4px 0;
    font-size: 16px;
  }

  .flow-form__button {
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .flow-form__main {

    .avue-form {
      padding: 0;
    }

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

.flow-form-overlay {

  .el-drawer__header,
  .el-dialog__header {
    margin: 0;
    padding: 0;

    .el-dialog__headerbtn {
      top: 0;
    }

    .el-drawer__close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .el-drawer__body,
  .el-dialog__body {
    margin: 0;
    padding: 0;
  }
}
</style>
