const {
  applyOptions,
  compare,
  createHash,
  replaceAll,
} = require("./utilities");

describe("applyOptions function test", () => {
  test("Default option (string text)", () => {
    const received = applyOptions("Race car");
    const expected = "racecar";
    expect(received).toStrictEqual(expected);
  });
  test("Option (string text): caseSensitive is true", () => {
    const caseSensitive = true;
    const received = applyOptions("Race car care", caseSensitive);
    const expected = "Racecarcare";
    expect(received).toStrictEqual(expected);
  });
  test("Option (string text): space is true", () => {
    const caseSensitive = false;
    const space = true;
    const received = applyOptions("race car care", caseSensitive, space);
    const expected = "race car care";
    expect(received).toStrictEqual(expected);
  });
  test("Option (string text): caseSensitive is true, space is true", () => {
    const caseSensitive = true;
    const space = true;
    const received = applyOptions("Race car care", caseSensitive, space);
    const expected = "Race car care";
    expect(received).toStrictEqual(expected);
  });
  test("Default option (array text)", () => {
    const received = applyOptions(["Car", "race car care"]);
    const expected = ["car", "racecarcare"];
    expect(received).toStrictEqual(expected);
  });
  test("Option (array text): caseSensitive is true", () => {
    const caseSensitive = true;
    const received = applyOptions(["cAr", "race car care"], caseSensitive);
    const expected = ["cAr", "racecarcare"];
    expect(received).toStrictEqual(expected);
  });
  test("Option (array text): space is true", () => {
    const caseSensitive = false;
    const space = true;
    const received = applyOptions(["cAr", "race car care"], caseSensitive, space);
    const expected = ["car", "race car care"];
    expect(received).toStrictEqual(expected);
  });
  test("Option (array text): caseSensitive is true, space is true", () => {
    const caseSensitive = true;
    const space = true;
    const received = applyOptions(["cAr", "race car care"], caseSensitive, space);
    const expected = ["cAr", "race car care"];
    expect(received).toStrictEqual(expected);
  });
});
describe("compare function test", () => {
  test("Same empty hashmap", () => {
    const a = {};
    const b = {};
    const received = compare(a, b);
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Same hashmap #1: a = b", () => {
    const a = { a: 1 };
    const b = { a: 1 };
    const received = compare(a, b);
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Same hashmap #2: part key&value of a are in b", () => {
    const a = { a: 1 };
    const b = { a: 1, b: 1 };
    const received = compare(a, b);
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Difference hashmap #1: completely different", () => {
    const a = { a: 1 };
    const b = { b: 1 };
    const received = compare(a, b);
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Different hashmap #3: part key of a are in b but different value", () => {
    const a = { a: 1 };
    const b = { a: 2, b: 1 };
    const received = compare(a, b);
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
});
describe("createHash function test", () => {
  const { pw, tw } = createHash("car", "race car care");
  test("Output pattern window (pw) is ok", () => {
    const expected = { c: 1, a: 1, r: 1 };
    expect(pw).toStrictEqual(expected);
  });
  test("Output text window (tw) is ok", () => {
    const expected = { c: 1, a: 1, r: 1 };
    expect(tw).toStrictEqual(expected);
  });
});
describe("replaceAll function test", () => {
  test("single match", () => {
    const received = replaceAll("race carcare", " ", "");
    const expected = "racecarcare";
    expect(received).toStrictEqual(expected);
  });
  test("multiple match", () => {
    const received = replaceAll("race car care", " ", "");
    const expected = "racecarcare";
    expect(received).toStrictEqual(expected);
  });
});
