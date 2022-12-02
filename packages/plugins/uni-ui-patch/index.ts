import type { Plugin } from "vite";

/** 实现日历组件插槽 */
export function uniCalendarSlot(code: string) {
  return code.replace(
    `<calendar-item class="uni-calendar-item--hook" :weeks="weeks" :calendar="calendar" :selected="selected" :lunar="lunar" @change="choiceDate"></calendar-item>`,
    `<view v-if="$slots.default" class="uni-calendar-item--hook" @click="choiceDate(weeks)">
<slot :weeks="weeks" :calendar="calendar" :selected="selected" :lunar="lunar"></slot>
</view>
<calendar-item v-else class="uni-calendar-item--hook" :weeks="weeks" :calendar="calendar" :selected="selected" :lunar="lunar" @change="choiceDate"></calendar-item>`
  );
}

export function uniUIPatch(): Plugin {
  return {
    name: "vite-plugin-uni-ui-patch",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".vue")) return;
      const match = id.slice(id.lastIndexOf("/")).match(/(uni-.*).vue/);
      const component = match?.[1];
      if (component === "uni-calendar") {
        code = uniCalendarSlot(code);
      }
      return code;
    }
  };
}
