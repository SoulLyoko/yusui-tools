import { generateTemplate } from ".";

describe("createEnvDts", () => {
  it("should create dts file", () => {
    const env = { DEV: true, VITE_TEST: "test" };
    const template = generateTemplate(env);
    expect(template).toContain("DEV: boolean");
    expect(template).toContain("VITE_TEST: string");
  });
});
