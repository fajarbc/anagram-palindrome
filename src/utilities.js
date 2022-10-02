/**
 * Return new text without spaces
 *
 * @param {string} text - The text where spaces will be removed
 * @returns new text without spaces
 *
 * @example <caption>Remove all spaces</caption>
 * removeSpaces("race car") // 'racecar'
 */
export function removeSpaces(text) {
  return text.replace(new RegExp(" ", "g"), "");
}

/**
 * Look for same key & value from a into b. In other words, check if a is part of b
 *
 * @param {Object} a - Object key and value to look for
 * @param {Object} b - Object key and value to look into
 * @returns {boolean} true if a is part of b
 *
 * @example <caption>Object compares</caption>
 * compare({a: 1}, {a: 1}) // true
 * compare({a: 1}, {a: 2}) // false
 * compare({a: 1}, {a: 1, b: 1}) // true
 * compare({a: 1}, {a: 2, b: 1}) // false
 * compare({a: 1}, {b: 1}) // false
 */
export function compare(a, b) {
  for (const key of Object.keys(a)) if (a[key] != b[key]) return false;

  return true;
}

/**
 * Create only fisrt hashmap of each character in pattern, text would have hashmap length as pattern hasmap length
 *
 * @param {string} pattern - Pattern string
 * @param {string} text - Text string
 * @returns {Object} - Object {pw, tw} hashmap of character as key and character count as value
 *
 * @example <caption>Object compares</caption>
 * createHash("car", "race car") // { pw: { c: 1, a: 1, r: 1 }, tw: { r: 1, a: 1, c: 1 } }
 * createHash("car", "eve") // { pw: { c: 1, a: 1, r: 1 }, tw: { e: 2, v: 1 } }
 */
export function createHash(pattern, text) {
  let p = pattern.split("");
  let t = text.split("");
  let pw = {};
  let tw = {};
  const pl = p.length;

  // create pattern window & first text window
  let i = 0;
  for (; i < pl; i++) {
    pw[p[i]] = pw[p[i]] ? ++pw[p[i]] : 1;
    tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1;
  }

  return { pw, tw };
}

/**
 * Apply options to text or array of text
 *
 * @param {string|Array} text - The text you want to apply options on
 * @param {boolean} [caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
 * @param {boolean} [space=false] - true = space is count. false = space is not count as character. Default is false
 * @returns {Array} [pattern, text]
 *
 * @example <caption>Object compares</caption>
 * applyOptions("Race car") // 'racecar'
 * applyOptions("Race car", {caseSensitive: true}) // 'Racecar'
 * applyOptions("Race car", {space: true}) // 'race car'
 */
export function applyOptions(text, caseSensitive = false, space = false) {
  if (typeof text === "string") {
    if (!space) text = removeSpaces(text);
    if (!caseSensitive) text = text.toLowerCase();
  } else {
    for (let i = 0; i < text.length; i++) {
      if (!space) text[i] = removeSpaces(text[i]);
      if (!caseSensitive) text[i] = text[i].toLowerCase();
    }
  }
  return text;
}
