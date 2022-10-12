<template>
  <span v-for="item in types" :key="item">
    <input v-model="type" type="radio" :value="item" />
    <label :for="item">{{ item }}</label>
  </span>
  <div class="demo">
    <BasicContainer class="container" :type="type">
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
    </BasicContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const types = ["card", "full", "ghost"];
const type = ref("card" as const);
</script>

<style lang="scss" scoped>
.demo {
  height: 200px;
  .container {
    background-color: #999;
  }
}
</style>
