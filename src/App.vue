<template>
  <FormDesign v-model="option"></FormDesign>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { FormDesign } from "../packages/form-design/index";
import "../packages/form-design/styles/index.scss";

const option = ref({});
</script>
