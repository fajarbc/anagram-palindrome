import { compare, createHash, applyOptions, Options, Hash } from "./utilities";

/**
 * Return anagram words/sequences from the given string if any
 *
 * @param {string} pattern - The sequence string you look for in in the text
 * @param {string} text - The whole string you want to look for the pattern
 * @param {Object} [options] - Options for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character. Default is false
 * @param {boolean} [options.unique=false] - true = return only unique sequence. false = return all sequence. Default is false
 * @returns {Array} anagram words/sequences
 *
 * @example <caption>Find anagram pattern in a sentence</caption>
 * findPattern("car", "race car care") // [ 'rac', 'car', 'arc', 'rca', 'car' ]
 *
 * @example <caption>Find anagram pattern with options</caption>
 * findPattern("car", "race car care", {space: true, unique: true}) // [ 'rac', 'car' ]
 */
export function findPattern(
  pattern: string,
  text: string,
  { caseSensitive = false, space = false, unique = false }: Options = {}
) {
  const words: string[] = [];
  let word: string;

  // apply options
  [pattern, text] = applyOptions([pattern, text], caseSensitive, space);

  let p: string[] = pattern.split("");
  let t: string[] = text.split("");
  const pl: number = p.length;

  // create pattern window & first text window
  let { pw, tw } = createHash(pattern, text);

  // iterate next text & compare to pattern window
  let i: number = pl;
  for (; i <= t.length; ++i) {
    word = text.substring(i - pl, i);
    if (compare(pw, tw) && (!unique || (unique && !words.includes(word))))
      words.push(word);
    tw[t[i]] = tw[t[i]] ? ++tw[t[i]] : 1;
    tw[t[i - pl]] = tw[t[i - pl]] ? --tw[t[i - pl]] : 1;
  }

  return words;
}

/**
 * Check if word is palindrome
 *
 * @param {string} word - The word to check
 * @param {Object} [options] - Options for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character. Default is false
 * @returns {boolean} - word is palindrome
 *
 * @example <caption>Check if word is palindrome</caption>
 * isPalindrome("Race car") // true
 *
 * @example <caption>Check if word is palindrome with options</caption>
 * isPalindrome("Racecar", {caseSensitive: true}) // false
 */
export function isPalindrome(
  word: string | string[],
  { caseSensitive = false, space = false }: Options = {}
) {
  word = applyOptions(word, caseSensitive, space);
  const len: number = word.length;

  for (let i: number = 0; i < Math.floor(len / 2); i++)
    if (word[i] != word[len - i - 1]) return false;

  return true;
}

/**
 * Check if word given are anagram
 *
 * @param {string} word1 - First word
 * @param {string} word2 - Second word
 * @param {Object} [options] - Options for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character. Default is false
 * @returns {boolean} - is two words are anagram
 *
 * @example <caption>Check if two words are anagram</caption>
 * areAnagram("mything", "My night") // true
 *
 * @example <caption>Check if two words are anagram with options</caption>
 * areAnagram("Thing", "Night", {caseSensitive: true}) // false
 */
export function areAnagram(
  word1: string,
  word2: string,
  { caseSensitive = false, space = false }: Options = {}
) {
  // word1 as pattern, word2 as text
  if (word1 == word2) return true;

  // apply options
  [word1, word2] = applyOptions([word1, word2], caseSensitive, space);

  if (word1.length != word2.length) return false;
  // create hash and compare <-- wrong. should strict to the order also
  let { pw, tw } = createHash(word1, word2);
  return compare(pw, tw);
}
