import { accAdd, accSub, accMul, accDiv, accChain, accSum, accSumBy, accMean, accMeanBy } from ".";

describe("math utils", () => {
  it("accAdd", () => {
    expect(accAdd(0.1, 0.2)).toBe(0.3);
    expect(accAdd(0.7, 0.1)).toBe(0.8);
    expect(accAdd(0.2, 0.4)).toBe(0.6);
    expect(accAdd(2.22, 0.1)).toBe(2.32);
  });
  it("accSub", () => {
    expect(accSub(1.5, 1.2)).toBe(0.3);
    expect(accSub(0.3, 0.2)).toBe(0.1);
  });
  it("accMul", () => {
    expect(accMul(19.9, 100)).toBe(1990);
    expect(accMul(1306377.64, 100)).toBe(130637764);
    expect(accMul(0.7, 180)).toBe(126);
    expect(accMul(9.7, 100)).toBe(970);
    expect(accMul(39.7, 100)).toBe(3970);
  });
  it("accDiv", () => {
    expect(accDiv(0.3, 0.1)).toBe(3);
    expect(accDiv(0.69, 10)).toBe(0.069);
  });
  it("accChain", () => {
    // (0.1+0.2-0.2)*3/0.1
    const result = accChain(0.1).add(0.2).sub(0.2).mul(3).div(0.1).value();
    expect(result).toBe(3);
  });
  it("accSum", () => {
    const list = [0.1, 0.2, 0.3];
    const result = accSum(list);
    expect(result).toBe(0.6);
  });
  it("accSumBy", () => {
    const list = [{ n: 0.1 }, { n: 0.2 }, { n: 0.3 }];
    const result = accSumBy(list, "n");
    expect(result).toBe(0.6);
  });
  it("accMean", () => {
    const list = [0.1, 0.2, 0.3];
    const result = accMean(list);
    expect(result).toBe(0.2);
  });
  it("accMeanBy", () => {
    const list = [{ n: 0.1 }, { n: 0.2 }, { n: 0.3 }];
    const result = accMeanBy(list, "n");
    expect(result).toBe(0.2);
  });
});
