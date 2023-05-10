declare module "vue" {
  interface GlobalComponents {
    IconSelect: typeof import("@yusui/components")["IconSelect"];
    VText: typeof import("@yusui/components")["VText"];
  }
}

export {};
