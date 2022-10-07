function removeSpaces(text) {
  return text.replace(new RegExp(" ", "g"), "");
}
function compare(a, b) {
  for (const key of Object.keys(a))
    if (a[key] != b[key])
      return false;
  return true;
}
function createHash(pattern, text) {
  let p = pattern.split("");
  let t = text.split("");
  let pw = {};
  let tw = {};
  const pl = p.length;
  let i = 0;
  for (; i < pl; i++) {
    pw[p[i]] = pw[p[i]] ? ++pw[p[i]] : 1;
    tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1;
  }
  return { pw, tw };
}
function applyOptions(text, caseSensitive = false, space = false) {
  if (typeof text === "string") {
    if (!space)
      text = removeSpaces(text);
    if (!caseSensitive)
      text = text.toLowerCase();
  } else {
    for (let i = 0; i < text.length; i++) {
      if (!space)
        text[i] = removeSpaces(text[i]);
      if (!caseSensitive)
        text[i] = text[i].toLowerCase();
    }
  }
  return text;
}

function findPattern(pattern, text, { caseSensitive = false, space = false, unique = false } = {}) {
  const words = [];
  let word;
  [pattern, text] = applyOptions([pattern, text], caseSensitive, space);
  let p = pattern.split("");
  let t = text.split("");
  const pl = p.length;
  let { pw, tw } = createHash(pattern, text);
  let i = pl;
  for (; i <= t.length; ++i) {
    word = text.substring(i - pl, i);
    if (compare(pw, tw) && (!unique || unique && !words.includes(word)))
      words.push(word);
    tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1;
    tw[t[i - pl]] = tw[t[i - pl]] ? --tw[t[i - pl]] : 1;
  }
  return words;
}
function isPalindrome(word, { caseSensitive = false, space = false } = {}) {
  word = applyOptions(word, caseSensitive, space);
  const len = word.length;
  for (let i = 0; i < Math.floor(len / 2); i++)
    if (word[i] != word[len - i - 1])
      return false;
  return true;
}
function areAnagram(word1, word2, { caseSensitive = false, space = false } = {}) {
  if (word1 == word2)
    return true;
  [word1, word2] = applyOptions([word1, word2], caseSensitive, space);
  if (word1.length != word2.length)
    return false;
  let { pw, tw } = createHash(word1, word2);
  return compare(pw, tw);
}

export { areAnagram, findPattern, isPalindrome };
