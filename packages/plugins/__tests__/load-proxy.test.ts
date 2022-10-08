import { loadProxy } from "../src/load-proxy";

describe("file utils", () => {
  it("getFileName", () => {
    const PROXY = `[["/api","https://192.168.1.202:8081",true],["/statics","http://192.168.1.202:9300"]]`;
    expect(loadProxy(PROXY)).toMatchInlineSnapshot(`
      {
        "/api": {
          "changeOrigin": true,
          "rewrite": [Function],
          "secure": true,
          "target": "https://192.168.1.202:8081",
          "ws": true,
        },
        "/statics": {
          "changeOrigin": true,
          "rewrite": [Function],
          "secure": false,
          "target": "http://192.168.1.202:9300",
          "ws": true,
        },
      }
    `);
  });
});
