import type { Plugin } from "vite";

import fs from "fs";
import path from "path";

export function generateTemplate(env: Record<string, any>) {
  const values = Object.entries(env)
    .map(([key, value]) => `/** ${key}=${value} */\n  ${key}: ${typeof value};`)
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
    apply: "serve",
    configResolved(config) {
      const { env, root } = config;
      const template = generateTemplate(env);
      const dtsPath = path.resolve(root, "node_modules/@types/env-dts");
      const filePath = path.resolve(dtsPath, "index.d.ts");
      if (!fs.existsSync(dtsPath)) {
        fs.mkdirSync(dtsPath, { recursive: true });
      }
      fs.writeFileSync(filePath, template);
    }
  };
}
