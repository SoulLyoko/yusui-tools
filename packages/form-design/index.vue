<template>
  <el-container class="form-design">
    <el-aside class="left-panel" :width="leftWidth">
      <LeftPanel></LeftPanel>
    </el-aside>
    <el-container>
      <el-header class="main-header" height="auto">
        <MainHeader></MainHeader>
      </el-header>
      <el-main class="main-workspace">
        <MainWorkspace :class="'device-' + deviceType"></MainWorkspace>
      </el-main>
    </el-container>
    <el-aside v-show="workType == 'design'" class="right-panel" :width="rightWidth">
      <RightPanel></RightPanel>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import type { AvueFormOption, AvueFormColumn, AvueFormGroup } from "@smallwei/avue";
import type { Resource } from "./types";

import { useProvideState } from "./composables";
import LeftPanel from "./components/left-panel/index.vue";
import MainWorkspace from "./components/main-workspace/index.vue";
import RightPanel from "./components/right-panel/index.vue";
import MainHeader from "./components/main-header/index.vue";

const props = defineProps<{
  modelValue?: AvueFormOption;
  resources?: Resource[];
  baseOption?: AvueFormColumn & AvueFormGroup;
  advanceOption?: AvueFormColumn & AvueFormGroup;
  leftWidth?: string;
  rightWidth?: string;
}>();
const emit = defineEmits(["reset"]);

const { workType, deviceType } = useProvideState(props, emit);
</script>
