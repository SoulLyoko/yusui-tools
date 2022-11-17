import { generateTemplate } from ".";

describe("createEnvDts", () => {
  it("should create dts file", () => {
    const env = { VITE_TEST: "test" };
    const template = generateTemplate(env);
    expect(template).toContain("VITE_NAME: `test`");
  });
});
