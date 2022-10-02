import {
  applyOptions,
  compare,
  createHash,
  removeSpaces,
} from "../src/utilities.js";

describe("applyOptions function test", () => {
  it("Default option (string text)", () => {
    const received = applyOptions("Race car");
    const expected = "racecar";
    expect(received).toEqual(expected);
  });
  it("Option (string text): caseSensitive is true", () => {
    const caseSensitive = true;
    const received = applyOptions("Race car", caseSensitive);
    const expected = "Racecar";
    expect(received).toEqual(expected);
  });
  it("Option (string text): space is true", () => {
    const caseSensitive = false;
    const space = true;
    const received = applyOptions("Race car", caseSensitive, space);
    const expected = "race car";
    expect(received).toEqual(expected);
  });
  it("Option (string text): caseSensitive is true, space is true", () => {
    const caseSensitive = true;
    const space = true;
    const received = applyOptions("Race car", caseSensitive, space);
    const expected = "Race car";
    expect(received).toEqual(expected);
  });
  it("Default option (array text)", () => {
    const received = applyOptions(["Car", "race car"]);
    const expected = ["car", "racecar"];
    expect(received).toEqual(expected);
  });
  it("Option (array text): caseSensitive is true", () => {
    const caseSensitive = true;
    const received = applyOptions(["cAr", "race car"], caseSensitive);
    const expected = ["cAr", "racecar"];
    expect(received).toEqual(expected);
  });
  it("Option (array text): space is true", () => {
    const caseSensitive = false;
    const space = true;
    const received = applyOptions(["cAr", "race car"], caseSensitive, space);
    const expected = ["car", "race car"];
    expect(received).toEqual(expected);
  });
  it("Option (array text): caseSensitive is true, space is true", () => {
    const caseSensitive = true;
    const space = true;
    const received = applyOptions(["cAr", "race car"], caseSensitive, space);
    const expected = ["cAr", "race car"];
    expect(received).toEqual(expected);
  });
});
describe("compare function test", () => {
  it("Same empty hashmap", () => {
    const a = {};
    const b = {};
    const received = compare(a, b);
    const expected = true;
    expect(received).toEqual(expected);
  });
  it("Same hashmap #1: a = b", () => {
    const a = { a: 1 };
    const b = { a: 1 };
    const received = compare(a, b);
    const expected = true;
    expect(received).toEqual(expected);
  });
  it("Same hashmap #2: part key&value of a are in b", () => {
    const a = { a: 1 };
    const b = { a: 1, b: 1 };
    const received = compare(a, b);
    const expected = true;
    expect(received).toEqual(expected);
  });
  it("Same hashmap #3: same key different value", () => {
    const a = { a: 1 };
    const b = { a: 2 };
    const received = compare(a, b);
    const expected = false;
    expect(received).toEqual(expected);
  });
  it("Difference hashmap #1: completely different", () => {
    const a = { a: 1 };
    const b = { b: 1 };
    const received = compare(a, b);
    const expected = false;
    expect(received).toEqual(expected);
  });
  it("Different hashmap #3: part key of a are in b but different value", () => {
    const a = { a: 1 };
    const b = { a: 2, b: 1 };
    const received = compare(a, b);
    const expected = false;
    expect(received).toEqual(expected);
  });
});
describe("createHash function test", () => {
  const { pw, tw } = createHash("car", "race car care");
  it("Output pattern window (pw) is ok", () => {
    const expected = { c: 1, a: 1, r: 1 };
    expect(pw).toEqual(expected);
  });
  it("Output text window (tw) is ok", () => {
    const expected = { c: 1, a: 1, r: 1 };
    expect(tw).toEqual(expected);
  });
});
describe("removeSpaces function test", () => {
  it("single match", () => {
    const received = removeSpaces("race carcare");
    const expected = "racecarcare";
    expect(received).toEqual(expected);
  });
  it("multiple match", () => {
    const received = removeSpaces("race car care");
    const expected = "racecarcare";
    expect(received).toEqual(expected);
  });
});
