import type { Plugin } from "vite";

const componentsEventsToFix = {
  "u-alert": ["click"],
  "u-avatar": ["click"],
  "u-back-top": ["click"],
  "u-col": ["click"],
  "u-column-notice": ["click"],
  "u-divider": ["click"],
  "u-dropdown": ["click"],
  "u-form-item": ["click"],
  "u-grid": ["click"],
  "u-grid-item": ["click"],
  "u-link": ["click"],
  "u-notice-bar": ["click"],
  "u-overlay": ["click"],
  "u-parse": ["tap"],
  "u-popup": ["click"],
  "u-row": ["click"],
  "u-row-notice": ["click"],
  "u-search": ["click"],
  "u-swipe-action-item": ["click"],
  "u-swiper": ["click"],
  "u-tabbar-item": ["click"],
  "u-tabs": ["click"],
  "u-tag": ["click"],
  "u-tooltip": ["click"],
  "u--image": ["click"],
  "u-list": ["scroll", "scrolltolower", "scrolltoupper"]
};

export function fixEvents(code: string, component?: string) {
  if (!component || !Object.keys(componentsEventsToFix).includes(component)) return code;
  const emits = componentsEventsToFix[component as keyof typeof componentsEventsToFix];
  code = code.replace(/export default {/, `export default {\nemits:[${emits.map(e => '"' + e + '"')}],`);
  return code;
}

export function fixBackTop(code: string, component?: string) {
  if (component !== "u-back-top") return code;
  code = code.replace("uni.$u.mpMixin, uni.$u.mixin", "mpMixin, mixin");
  return code;
}

export function uviewPatch(): Plugin {
  return {
    name: "vite-plugin-uview-patch",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".vue")) return;
      const match = id.slice(id.lastIndexOf("/")).match(/(u-.*).vue/);
      const component = match?.[1];
      code = fixEvents(code, component);
      code = fixBackTop(code, component);
      return code;
    }
  };
}
