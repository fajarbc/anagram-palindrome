/**
 * Options
 * @alias Options
 */
declare type Options = {
    /**
     * if true, text is case sensitive
     */
    caseSensitive?: boolean;
    /**
     * if true, spaces in text are counted as a character
     */
    space?: boolean;
    /**
     * if true, returned array result will be unique
     */
    unique?: boolean;
};

/**
 * Return anagram words/sequences from the given string if any
 *
 * @param {string} pattern - The sequence string you look for in in the text
 * @param {string} text - The whole string you want to look for the pattern
 * @param {Object} [options] - {@link Options} for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character. Default is false
 * @param {boolean} [options.unique=false] - true = return only unique sequence. false = return all sequence. Default is false
 * @returns {Array} anagram words/sequences
 *
 * @category Function
 * @example <caption>Find anagram pattern in a sentence</caption>
 * findPattern("car", "race car care") // [ 'rac', 'car', 'arc', 'rca', 'car' ]
 *
 * @example <caption>Find anagram pattern with options</caption>
 * findPattern("car", "race car care", {space: true, unique: true}) // [ 'rac', 'car' ]
 */
declare function findPattern(pattern: string, text: string, { caseSensitive, space, unique }?: Options): string[];
/**
 * Check if word is palindrome
 *
 * @param {string} word - The word to check
 * @param {Object} [options] - {@link Options} for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character. Default is false
 * @returns {boolean} is the word palindrome
 *
 * @category Function
 * @example <caption>Check if word is palindrome</caption>
 * isPalindrome("Race car") // true
 *
 * @example <caption>Check if word is palindrome with options</caption>
 * isPalindrome("Racecar", {caseSensitive: true}) // false
 */
declare function isPalindrome(word: string | string[], { caseSensitive, space }?: Options): boolean;
/**
 * Check if word given are anagram
 *
 * @param {string} word1 - First word
 * @param {string} word2 - Second word
 * @param {Object} [options] - {@link Options} for customization
 * @param {boolean} [options.caseSensitive=false] - true = case sensitive. false = case insensitive. Default is false
 * @param {boolean} [options.space=false] - true = space is count. false = space is not count as character. Default is false
 * @returns {boolean} is two words are anagram
 *
 * @category Function
 * @example <caption>Check if two words are anagram</caption>
 * areAnagram("mything", "My night") // true
 *
 * @example <caption>Check if two words are anagram with options</caption>
 * areAnagram("Thing", "Night", {caseSensitive: true}) // false
 */
declare function areAnagram(word1: string, word2: string, { caseSensitive, space }?: Options): boolean;

export { areAnagram, findPattern, isPalindrome };
