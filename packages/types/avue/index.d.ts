/// <reference types="./dic" />
/// <reference types="./form" />
/// <reference types="./crud" />
/// <reference types="./tree" />

declare module "@smallwei/avue" {
  const AvueConfig: {
    size?: "large" | "default" | "small";
    menuType?: "button" | "icon" | "text" | "menu";
    theme?: "dark";
    axios: import("axios").AxiosInstance;
  };
  const Avue: {
    install(app: import("vue").App, config?: AvueConfig): void;
  };
  export default Avue;
}

declare module "vue" {
  interface GlobalComponents {
    AvueCrud: typeof import("@smallwei/avue")["AvueCrud"];
    AvueForm: typeof import("@smallwei/avue")["AvueForm"];
    AvueTree: typeof import("@smallwei/avue")["AvueTree"];
  }
  interface ComponentCustomProperties {
    $ImagePreview: (list: { url?: string; thumbUrl?: string }[], index?: number) => void;
  }
}

export {};
