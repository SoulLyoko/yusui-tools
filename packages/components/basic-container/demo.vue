<template>
  <BasicContainer class="container" :type="type">
    <span v-for="item in types" :key="item">
      <input v-model="type" type="radio" :value="item" />
      <label :for="item">{{ item }}</label>
    </span>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </BasicContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const types = ["card", "full", "ghost"];
const type = ref("full" as const);
</script>

<style lang="scss" scoped>
.container {
  background-color: #999 !important;
  height: 200px;
}
</style>
