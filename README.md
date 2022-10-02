# anagram-palindrome

Find anagram words if existed from the given pattern. Check if two strings are anagram. Check if the given word is palindrome.

It has npm package here called [anagram-palindrome](https://www.npmjs.com/package/anagram-palindrome)

## Install
```sh
npm i anagram-palindrome
```

## Usage
```javascript
import { findPattern, areAnagram, isPalindrome } from "anagram-palindrome"

// findPattern
console.log(findPattern("car", "race car care")) // output: [ 'rac', 'car', 'arc', 'rca', 'car' ]
console.log(findPattern("car", "race car care", {unique: true})) // output: [ 'rac', 'car', 'arc', 'rca' ]
console.log(findPattern("car", "race car care", {space: true})) // output: [ 'rac', 'car', 'car' ]
console.log(findPattern("car", "race car care", {space: true, unique: true})) // output: [ 'rac', 'car' ]
console.log(findPattern("cAr", "race car cAre", {caseSensitive: true})) // output: [ 'rcA', 'cAr' ]

// areAnagram
console.log(areAnagram("mything", "My night")) // output: true
console.log(areAnagram("mything", "My night", {space: true})) // output: false
console.log(areAnagram("Thing", "Night", {caseSensitive: true})) // output: false
console.log(areAnagram("My thing", "My night", {caseSensitive: true, space: true})) // output: true
console.log(areAnagram("Mything", "My Night", {caseSensitive: true, space: true})) // output: false

// isPalindrome
console.log(isPalindrome("Race car")) // output: true
console.log(isPalindrome("Racecar", {caseSensitive: true})) // output: false
console.log(isPalindrome("race car", {space: true})) // output: false
console.log(isPalindrome("Rac e caR", {caseSensitive: true, space: true})) // output: true
console.log(isPalindrome("Race car", {caseSensitive: true, space: true})) // output: false
```
Or if you are using this directly in your browser, you could use `type="module"` in your `script` tag. Here, I'm using **unpkg.com** as cdn source to call package `anagram-palindrome` version `0.2.1`.

```html
<script type="module">
    import { findPattern } from 'https://unpkg.com/anagram-palindrome@0.2.1/src/index.js';

  console.log(findPattern("car", "race car care")) // output: [ 'rac', 'car', 'arc', 'rca', 'car' ]
</script>
```
or import all function
```html
<script type="module">
  import * as ap from 'https://unpkg.com/anagram-palindrome@0.2.1/src/index.js';

  console.log(ap.findPattern("car", "race car care")) // output: [ 'rac', 'car', 'arc', 'rca', 'car' ]
</script>
```

## Function
### findPattern
```findPattern(pattern, text, options)```
- Description: return anagram words/sequences from the given string (text) if any
- Return type `array`
- `pattern` (string) is the sequence string you look for in in the string `text`
- `text` (string) is the whole string you want to look for the `pattern`
- `options` (object) is an object to customize the options desribed bellow:
  | Parameter | Type | Deafult | Description |
  |:----------|:----:|:-------:|:------------|
  | space | boolean | false | `true` means space counted as a character.<br> `false` means space is not counted as character and will be ignored |
  | caseSensitive | boolean | false | `true` means case sensitive character.<br> `false` means case insensitive |
  | unique | boolean | false | `true` only return unique sequence result.<br> `false` will return all sequence result |
- Example use :
    ```javascript
    import { findPattern } from "anagram-palindrome"

    console.log(findPattern("car", "race car care", {space: true, unique: true})) // output: [ 'rac', 'car' ]
    ```

### areAnagram
```areAnagram(word1, word2, options)```
- Description: Check if two strings are anagram
- Return type `boolean`. `true` if they are anagram, `false` if it is not anagram
- `word1` and `word2` is the text/string you you want to check wether if they are anagram or not
- `options` (object) is an object to customize the options desribed bellow:

  | Parameter | Type | Deafult | Description |
  |:----------|:----:|:-------:|:------------|
  | space | boolean | false | `true` means space counted as a character.<br> `false` means space is not counted as character and will be ignored |
  | caseSensitive | boolean | false | `true` means case sensitive character.<br> `false` means case insensitive |
- Example use :
    ```javascript
    import { areAnagram } from "anagram-palindrome"
    console.log(areAnagram("Thing", "Night", {caseSensitive: true})) // output: false
    console.log(areAnagram("Thing", "Night")) // output: true
    ```

### isPalindrome
```isPalindrome(word, options)```
- Description: Check if the word is palindrome
- Return type `boolean`. `true` if the word palindrome, `false` if it is not palindrome
- `word` is the text/string you you want to check if it is palindrome or not
- `options` (object) is an object to customize the options desribed bellow:

  | Parameter | Type | Deafult | Description |
  |:----------|:----:|:-------:|:------------|
  | space | boolean | false | `true` means space counted as a character.<br> `false` means space is not counted as character and will be ignored |
  | caseSensitive | boolean | false | `true` means case sensitive character.<br> `false` means case insensitive |
- Example use :
    ```javascript
    import { isPalindrome } from "anagram-palindrome"
    console.log(isPalindrome("Race car")) // output: true
    console.log(isPalindrome("Racecar", {caseSensitive: true})) // output: false
    console.log(isPalindrome("race car", {space: true})) // output: false
    ```
