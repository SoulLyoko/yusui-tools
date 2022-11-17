import type { Plugin } from "vite";

// import fs from "fs";
// import path from "path";

// import { loadEnv } from "vite";

export function generateTemplate(env: Record<string, string>) {
  const values = Object.entries(env)
    .map(([key, value]) => `readonly ${key}: \`${value}\`;`)
    .join("\n  ");
  const template = `interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  ${values}
}
`;
  return template;
}

export function createEnvDts(): Plugin {
  return {
    name: "vite-plugin-env-dts",
    enforce: "pre",
    config(config, { mode }) {
      console.log("🚀 ~ file: index.ts ~ line 8 ~ config ~ config", config);
      // const env = loadEnv(mode, config.envDir!, config.envPrefix);
      // const template = generateTemplate(env);
      // const dtsPath = path.resolve(process.cwd(), "node_modules/@types/env-dts/index.d.ts");
      // fs.writeFileSync(dtsPath, template);
    }
  };
}
