declare module "vue" {
  interface GlobalComponents {
    BasicContainer: typeof import("@yusui/components")["BasicContainer"];
    IconSelect: typeof import("@yusui/components")["IconSelect"];
    VText: typeof import("@yusui/components")["VText"];
  }
}

export {};
