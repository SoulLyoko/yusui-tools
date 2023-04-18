/// <reference types="./dic" />
/// <reference types="./form" />
/// <reference types="./crud" />
/// <reference types="./tree" />

declare module "@smallwei/avue" {
  const avueConfig: {
    size?: "large" | "default" | "small";
    menuType?: MenuType;
    theme?: "dark";
    axios?: import("axios").AxiosInstance;
    appendToBody?: boolean;
  };
  const Avue: {
    install(app: import("vue").App, config?: AvueConfig): void;
  };
  export type AvueConfig = typeof avueConfig;
  export default Avue;
}
