import { storage, cookie } from ".";

type Cache = typeof storage | typeof cookie;

const testSetSpecial = (cache: Cache) => {
  const valNull = null;
  cache.set("valNull", valNull);
  expect(cache.get("valNull")).toBeNull();

  const valUndefined = undefined;
  cache.set("valUndefined", valUndefined);
  expect(cache.get("valUndefined")).toBeNull();

  const valNaN = NaN;
  cache.set("valNaN", valNaN);
  expect(cache.get("valNaN")).toBeNull();

  const valInfinity = Infinity;
  cache.set("valInfinity", valInfinity);
  expect(cache.get("valInfinity")).toBeNull();
};
const testSetString = (cache: Cache) => {
  const emptyString = "";
  cache.set("emptyString", emptyString);
  expect(cache.get("emptyString")).toBe(emptyString);

  const normalString = "test123";
  cache.set("normalString", normalString);
  expect(cache.get("normalString")).toBe(normalString);
};
const testSetNumber = (cache: Cache) => {
  const numberZero = 0;
  cache.set("numberZero", numberZero);
  expect(cache.get("numberZero")).toBe(numberZero);

  const numberNaN = NaN;
  cache.set("numberNaN", numberNaN);
  expect(cache.get("numberNaN")).toBe(null);

  const normalNumber = 123;
  cache.set("normalNumber", normalNumber);
  expect(cache.get("normalNumber")).toBe(normalNumber);

  const negativeNumber = -123;
  cache.set("negativeNumber", negativeNumber);
  expect(cache.get("negativeNumber")).toBe(negativeNumber);
};
const testSetBoolean = (cache: Cache) => {
  const booleanTrue = true;
  cache.set("booleanTrue", booleanTrue);
  expect(cache.get("booleanTrue")).toBe(booleanTrue);

  const booleanfalse = false;
  cache.set("booleanfalse", booleanfalse);
  expect(cache.get("booleanfalse")).toBe(booleanfalse);
};
const testSetObject = (cache: Cache) => {
  const emptyObject = {};
  cache.set("emptyObject", emptyObject);
  expect(cache.get("emptyObject")).toEqual(emptyObject);

  const normalObject = { string: "test123", number: 123, object: {} };
  cache.set("normalObject", normalObject);
  expect(cache.get("normalObject")).toEqual(normalObject);
};
const testSetArray = (cache: Cache) => {
  const emptyArray: never[] = [];
  cache.set("emptyArray", emptyArray);
  expect(cache.get("emptyArray")).toEqual(emptyArray);

  const stringArray: string[] = ["1", "2", "3"];
  cache.set("stringArray", stringArray);
  expect(cache.get("stringArray")).toEqual(stringArray);

  const numberArray: number[] = [1, 2, 3];
  cache.set("numberArray", numberArray);
  expect(cache.get("numberArray")).toEqual(numberArray);

  const mixArray: any[] = ["test", 123, { a: "a", b: "b", c: "c" }];
  cache.set("mixArray", mixArray);
  expect(cache.get("mixArray")).toEqual(mixArray);
};
const testRemoveAndClear = (cache: Cache) => {
  cache.set("testRemove", "testRemove");
  cache.remove("testRemove");
  expect(cache.get("testRemove")).toBeNull();

  cache.set("testClear1", "testClear2");
  cache.set("testClear2", "testClear2");
  cache.clear();
  expect(cache.get("testClear1")).toBeNull();
  expect(cache.get("testClear2")).toBeNull();
};

describe("storage", () => {
  it("set special", () => testSetSpecial(storage));
  it("set string", () => testSetString(storage));
  it("set number", () => testSetNumber(storage));
  it("set boolean", () => testSetBoolean(storage));
  it("set object", () => testSetObject(storage));
  it("set array", () => testSetArray(storage));
  it("remove and clear", () => testRemoveAndClear(storage));
});

describe("cookie", () => {
  it("set special", () => testSetSpecial(cookie));
  it("set string", () => testSetString(cookie));
  it("set number", () => testSetNumber(cookie));
  it("set boolean", () => testSetBoolean(cookie));
  it("set object", () => testSetObject(cookie));
  it("set array", () => testSetArray(cookie));
  it("remove and clear", () => testRemoveAndClear(cookie));
});
