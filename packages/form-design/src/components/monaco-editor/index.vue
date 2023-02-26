<template>
  <el-tooltip v-if="tooltip" trigger="click" effect="light">
    <el-button>编辑代码</el-button>
    <template #content>
      <Editor
        v-model:value="editorValue"
        defaultLanguage="javascript"
        :options="options"
        :width="width || '300px'"
        :height="height || '200px'"
        v-bind="$attrs"
      ></Editor>
    </template>
  </el-tooltip>
  <Editor
    v-else
    v-model:value="editorValue"
    defaultLanguage="javascript"
    :options="options"
    :width="width"
    :height="height"
  ></Editor>
</template>

<script setup lang="ts">
import type { EditorProps } from "@guolao/vue-monaco-editor";

import { computed, onUnmounted } from "vue";
import Editor, { useMonaco } from "@guolao/vue-monaco-editor";

import { json5Stringify, json5Parse } from "../../utils";

const props = defineProps<{
  modelValue?: any;
  valueType?: string;
  options?: EditorProps["options"];
  tooltip?: boolean;
  width?: string | number;
  height?: string | number;
}>();
const emit = defineEmits(["update:modelValue"]);

const { monacoRef, unload } = useMonaco();
onUnmounted(() => !monacoRef.value && unload());

const options = computed(() => {
  return {
    renderValidationDecorations: "off",
    minimap: { enabled: false },
    ...props.options
  };
});

const editorValue = computed({
  get() {
    const value = props.modelValue;
    if (props.valueType === "function") {
      return value ? value.toString() : "";
    } else if (["object", "array"].includes(props.valueType!)) {
      return value ? json5Stringify(value) : "";
    }
    return String(value);
  },
  set(val) {
    if (props.valueType === "function") {
      val = eval(`${val}`);
    } else if (["object", "array"].includes(props.valueType!)) {
      val = json5Parse(val);
    }
    emit("update:modelValue", val);
  }
});
</script>
