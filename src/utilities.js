/**
 * Return new string with pattern "find" replaced by string "replace"
 * @param {string} string - The string needs to be 
 * @param {string} find - The pattern string to be replaced
 * @param {string} replace - The string going to replace the pattern string
 * @returns new replaced string
 */
function replaceAll(string, find, replace) {
  return string.replace(new RegExp(find, "g"), replace);
}

module.exports = {
  replaceAll: replaceAll,
  /**
   * Look for same key & value from a into b. In other words, check if a is part of b
   * @param {Object} a - Object key and value to look for 
   * @param {Object} b - Object key and value to look into
   * @returns {boolean} true if a is part of b
   */
  compare: (a, b) => {
    for (const key of Object.keys(a)) if (a[key] != b[key]) return false;

    return true;
  },
  createHash: (pattern, text) => {
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
  },
  /**
   * Apply options to text or array of text
   * @param {string|Array} text - The text you want to apply options on
   * @param {boolean} [caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
   * @param {boolean} [space=false] - true = space is count. false = space is not count as character. Default is false
   * @returns {Array} [pattern, text]
   */
  applyOptions: (text, caseSensitive = false, space = false) => {
    if(typeof text === "string") {
      if (!space) text = replaceAll(text, " ", ""); // remove space
      if (!caseSensitive) text = text.toLowerCase(); // transform to lower case
    } else {
      for (let i = 0; i < text.length; i++) {
        if (!space) text[i] = replaceAll(text[i], " ", ""); // remove space
        if (!caseSensitive) text[i] = text[i].toLowerCase(); // transform to lower case
      }
    }
    return text;
  },
};
