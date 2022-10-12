<template>
  <div class="basic-container" :class="type">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/**
 * 基础容器
 * @prop {String} type 容器模式:card卡片|full高度填满主区域|ghost透明背景
 */
import type { PropType } from "vue";

defineProps({
  type: { type: String as PropType<"card" | "full" | "ghost">, default: "full" }
});
</script>
