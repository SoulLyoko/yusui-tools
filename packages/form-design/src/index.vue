<template>
  <el-container class="form-design">
    <el-aside class="left-panel">
      <LeftPanel></LeftPanel>
    </el-aside>
    <el-container>
      <el-header class="main-header">
        <MainHeader></MainHeader>
      </el-header>
      <el-main class="main-workspace">
        <MainWorkspace></MainWorkspace>
      </el-main>
    </el-container>
    <el-aside class="right-panel">
      <RightPanel></RightPanel>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import type { Resource } from "./types";

import { useProvideState } from "./composables";
import LeftPanel from "./components/left-panel/index.vue";
import MainWorkspace from "./components/main-workspace/index.vue";
import RightPanel from "./components/right-panel/index.vue";
import MainHeader from "./components/main-header/index.vue";

const props = defineProps<{
  resources: Resource[];
}>();

useProvideState(props);
</script>
