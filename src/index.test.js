const { isPalindrome, areAnagram, findPattern } = require("./index");

describe("findPattern function test", () => {
  test("Default option", () => {
    const received = findPattern("car", "race car care");
    const expected = ["rac", "car", "arc", "rca", "car"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true", () => {
    const received = findPattern("cAr", "race car cAre", { caseSensitive: true });
    const expected = ["rcA", "cAr"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true", () => {
    const received = findPattern("car", "race car care", { space: true });
    const expected = ["rac", "car", "car"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: unique is true", () => {
    const received = findPattern("car", "race car care", { unique: true });
    const expected = ["rac", "car", "arc", "rca"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true", () => {
    const received = findPattern("cAr", "race car cAre", {
      caseSensitive: true,
      space: true,
    });
    const expected = ["cAr"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, unique is true", () => {
    const received = findPattern("cAr", "rAce car cAre", {
      caseSensitive: true,
      unique: true,
    });
    const expected = ["rAc", "rcA", "cAr"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true, unique is true", () => {
    const received = findPattern("car", "race car care", {
      space: true,
      unique: true,
    });
    const expected = ["rac", "car"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true, unique is true", () => {
    const received = findPattern("Car", "raCe caR care caR", {
      caseSensitive: true,
      space: true,
      unique: true,
    });
    const expected = ["raC"];
    expect(received).toStrictEqual(expected);
  });
});
describe("isPalindrome function test", () => {
  test("Deafult option #1 : odd", () => {
    const received = isPalindrome("Race car");
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Deafult option #2 : even", () => {
    const received = isPalindrome("Race Ecar");
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Deafult option #2 : false", () => {
    const received = isPalindrome("mything", "My night");
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true", () => {
    const received = isPalindrome("Racecar", { caseSensitive: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true", () => {
    const received = isPalindrome("race car", { space: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #1 : true", () => {
    const received = isPalindrome("Rac e caR", {
      caseSensitive: true,
      space: true,
    });
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #2 : false", () => {
    const received = isPalindrome("Race car", {
      caseSensitive: true,
      space: true,
    });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
});
describe("areAnagram function test", () => {
  test("Deafult option", () => {
    const received = areAnagram("mything", "My night");
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true", () => {
    const received = areAnagram("Thing", "Night", { caseSensitive: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true", () => {
    const received = areAnagram("mything", "My night", { space: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #1 : true", () => {
    const received = areAnagram("My thing", "My night", {
      caseSensitive: true,
      space: true,
    });
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #2 : false", () => {
    const received = areAnagram("Mything", "My Night", {
      caseSensitive: true,
      space: true,
    });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #3", () => {
    const received = areAnagram("my thing", "My night", {
      caseSensitive: true,
      space: true,
    });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
});
