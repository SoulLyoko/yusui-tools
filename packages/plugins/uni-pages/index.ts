import type { Plugin } from "vite";
import type { BaseElementNode, AttributeNode } from "@vue/compiler-core";

import path from "path";
import fs from "fs";

import { parse } from "@vue/compiler-sfc";

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

export function generatePages(src: string) {
  const files = traverse(path.resolve(src, "pages"));
  const defaultConfigPath = path.resolve(src, "pages.default.json");
  const configStr = fs.existsSync(defaultConfigPath) && fs.readFileSync(defaultConfigPath, "utf-8");
  const defaultConfig = (configStr && JSON.parse(configStr as string)) || {};
  const pages = files
    .filter(e => e.endsWith(".vue"))
    .map(filepath => {
      const file = fs.readFileSync(filepath, "utf-8");
      // 匹配<page-meta>标签
      const pageMeta = file.match(/<page-meta(([\s\S])*?)<\/page-meta>/)?.[0];
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
          if (value === "true") value = true;
          if (value === "false") value = false;
          return [key, value];
        })
      );
      // 合并style数据
      const existPageConfig = defaultConfig.pages?.find((e: any) => e.path === path);
      if (existPageConfig) {
        return {
          path,
          style: { ...existPageConfig.style, ...pageStyle }
        };
      } else {
        return {
          path,
          style: { ...pageStyle }
        };
      }
    })
    .filter(e => e);
  const pageJson = {
    ...defaultConfig,
    pages
  };
  // 写入pages.json
  fs.existsSync(src) && fs.writeFileSync(path.resolve(src, "pages.json"), JSON.stringify(pageJson, null, 2));
}

/**
 * 扩展page-meta功能,自动生成pages.json
 * @param src 项目src目录
 */
export function uniPages(src: string): Plugin {
  return {
    name: "vite-plugin-uni-pages",
    enforce: "pre",
    config() {
      generatePages(src);
    },
    handleHotUpdate() {
      generatePages(src);
    }
  };
}
