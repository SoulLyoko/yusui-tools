import { sleep, to } from "../src/tool";

describe("tool utils", () => {
  it("sleep", async () => {
    const sleep100ms = async () => {
      await sleep(100);
      return "success";
    };
    await expect(sleep100ms()).resolves.toBe("success");
  });

  it("awaitTo", async () => {
    const fail = async () => {
      const [err, res] = await to(Promise.reject("fail"));
      if (err) return err;
      return res;
    };
    await expect(fail()).resolves.toBe("fail");
    const success = async () => {
      const [err, res] = await to(Promise.resolve("success"));
      if (err) return err;
      return res;
    };
    await expect(success()).resolves.toBe("success");
  });
});
