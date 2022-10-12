import { loadProxy } from ".";

describe("loadProxy", () => {
  it("should transform to proxy config", () => {
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
