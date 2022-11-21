/// <reference types="./dic" />
/// <reference types="./form" />
/// <reference types="./crud" />
/// <reference types="./tree" />

declare module "@smallwei/avue" {
  const AvueConfig: {
    size?: "large" | "default" | "small";
    menuType?: MenuType;
    theme?: "dark";
    axios: import("axios").AxiosInstance;
  };
  const Avue: {
    install(app: import("vue").App, config?: typeof AvueConfig): void;
  };
  export default Avue;
}
