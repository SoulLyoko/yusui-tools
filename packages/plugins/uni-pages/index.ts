import type { Plugin } from "vite";
import type { BaseElementNode, AttributeNode } from "@vue/compiler-core";

import path from "path";
import fs from "fs";

import { parse } from "@vue/compiler-sfc";

export interface UniPagesOptions {
  /** pages目录 */
  pagesDir?: string;
  /** pages.json路径 */
  pagesJsonPath?: string;
  /** pages.default.json路径 */
  defaultConfigPath?: string;
  /** 注入page-style */
  pageStyle?: {
    isStatic?: boolean;
    value?: string;
  };
}
interface Page {
  path?: string;
  style?: Record<string, unknown>;
}

function traverse(dir: string, files: string[] = []) {
  fs.existsSync(dir) &&
    fs.readdirSync(dir).forEach(name => {
      const pathname = path.join(dir, name);
      if (fs.statSync(pathname).isDirectory()) {
        traverse(pathname, files);
      } else {
        files.push(pathname);
      }
    });
  return files;
}

function matchPageMeta(code: string) {
  return code.match(/<page-meta(([\s\S])*?)<\/page-meta>/)?.[0];
}

export function generatePages(options: UniPagesOptions) {
  const { pagesDir, pagesJsonPath, defaultConfigPath } = options;
  if (!pagesDir || !pagesJsonPath) return;
  const files = traverse(pagesDir);
  const defaultConfigStr =
    (defaultConfigPath && fs.existsSync(defaultConfigPath) && fs.readFileSync(defaultConfigPath, "utf-8")) || "{}";
  const defaultConfig = JSON.parse(defaultConfigStr as string);
  const defaultPages: Page[] = defaultConfig.pages ?? [];
  const generatedPages: Page[] = [];
  files
    .filter(e => e.endsWith(".vue"))
    .forEach(filepath => {
      const file = fs.readFileSync(filepath, "utf-8");
      // 匹配<page-meta>标签
      const pageMeta = matchPageMeta(file);
      if (!pageMeta) return;
      // 页面路径path
      const path = filepath.replace(/\\/g, "/").replace(/.*(pages\/.*).vue/, "$1");
      const {
        descriptor: { template }
      } = parse(`<template>${pageMeta}</template>`);
      // 获取page-meta上的属性作为style数据
      const pageMetaNode = template?.ast?.children?.[0] as BaseElementNode;
      const props = pageMetaNode?.props?.filter(e => !["bind", "on"].includes(e.name));
      const pageStyle = Object.fromEntries(
        props.map(prop => {
          prop = prop as AttributeNode;
          const key = prop.name;
          let value: any = prop.value?.content;
          // 转换数字和布尔值
          if (!isNaN(Number(value))) value = Number(value);
          if (value === "true") value = true;
          if (value === "false") value = false;
          return [key, value];
        })
      );
      const existPageConfig = defaultPages.find(e => e.path === path);
      generatedPages.push({
        path,
        style: { ...existPageConfig?.style, ...pageStyle }
      });
    });

  const pageJson = {
    ...defaultConfig,
    pages: generatedPages.sort(a => {
      return defaultPages.findIndex(e => e.path === a.path) == -1 ? 1 : -1;
    })
  };
  const oldJsonStr = (fs.existsSync(pagesJsonPath) && fs.readFileSync(pagesJsonPath, "utf-8")) || "{}";
  if (JSON.stringify(JSON.parse(oldJsonStr)) === JSON.stringify(pageJson)) return;
  // 写入pages.json
  fs.writeFileSync(pagesJsonPath, JSON.stringify(pageJson, null, 2));
}

export function injectPageStyle(code: string, pageStyle?: UniPagesOptions["pageStyle"]) {
  if (!pageStyle) return;
  const { isStatic, value } = pageStyle;
  const replacedContent = isStatic ? `<page-meta page-style="${value}"` : `<page-meta :page-style="${value}"`;
  code = code.replace(`<page-meta`, replacedContent);
  return code;
}

/**
 * 扩展page-meta功能,自动生成pages.json
 * @param options 配置
 */
export function uniPages(options: UniPagesOptions): Plugin {
  const { pagesJsonPath } = options;
  if (pagesJsonPath && !fs.existsSync(pagesJsonPath)) {
    fs.writeFileSync(pagesJsonPath, "{}");
  }
  return {
    name: "vite-plugin-uni-pages",
    enforce: "pre",
    config() {
      generatePages(options);
    },
    handleHotUpdate() {
      generatePages(options);
    },
    transform(code, id) {
      const { pageStyle } = options;
      if (!pageStyle) return;
      if (!id.endsWith(".vue")) return;
      if (!matchPageMeta(code)) return;
      return injectPageStyle(code, pageStyle);
    }
  };
}
