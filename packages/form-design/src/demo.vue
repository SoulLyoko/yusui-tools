<template>
  <div style="height: 800px">
    <FormDesign v-model="option"></FormDesign>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FormDesign } from "@yusui/form-design";

const option = ref({ menuBtn: false, span: 24 });
</script>
