declare module "vue" {
  interface GlobalComponents {
    IconSelect: typeof import("@yusui/components")["IconSelect"];
    InputTree: typeof import("@yusui/components")["InputTree"];
    VText: typeof import("@yusui/components")["VText"];
  }
}

export {};
