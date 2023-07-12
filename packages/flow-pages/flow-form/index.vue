<script setup lang="ts">
import type { FlowButton } from '../api'

import { ElMessage } from 'element-plus'

import { useButtonHandler, useEmits, useProps, useProvideState } from './composables'
import ButtonList from './components/button-list.vue'
import ApprovalForm from './components/approval-form.vue'

const props = defineProps(useProps())
const emit = defineEmits(useEmits())
const state = useProvideState(props, emit)

const {
  title,
  flowDetail,
  tabRefs,
  tabList,
  activeTab,
  activeBtn,
  formLoading,
  approvalVisible,
  submitLoading,
  beforeClick,
  beforeSubmit,
} = state

async function onButtonClick(btn: FlowButton) {
  activeBtn.value = btn
  for (const tabRef of Object.values(tabRefs.value))
    await tabRef?.validate?.()
  await beforeClick?.value?.(btn)
  if (btn?.approval !== 'false')
    approvalVisible.value = true
  else
    onSubmit()
}

const buttonHandler = useButtonHandler(state)
async function onSubmit() {
  try {
    const { buttonKey } = activeBtn.value
    submitLoading.value = true
    await beforeSubmit?.value?.(activeBtn.value!)
    const handler = buttonHandler[buttonKey!]?.()
    if (handler instanceof Promise) {
      await handler
      ElMessage.success('操作成功')
      approvalVisible.value = false
      emit('complete', activeBtn.value!)
    }
    else {
      ElMessage.error('操作失败')
    }
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
    <el-header class="flow-form__header" height="auto">
      <div class="flow-form__title">
        {{ title ?? flowDetail.flowInstance?.title }}
      </div>
      <ButtonList v-if="!detail" @click="onButtonClick" />
      <slot name="button" />
    </el-header>
    <el-main class="flow-form__main">
      <el-tabs v-model="activeTab">
        <el-tab-pane v-for="tab in tabList" :key="tab.prop" :label="tab.label" :name="tab.prop" lazy>
          <component :is="$slots.default ?? tab.component" v-if="tab.prop === 'formTab'" :ref="(el: any) => tabRefs[tab.prop!] = el" />
          <component :is="tab.component" v-else :ref="(el: any) => tabRefs[tab.prop!] = el" />
        </el-tab-pane>
      </el-tabs>
    </el-main>

    <ApprovalForm @confirm="onSubmit" />
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
