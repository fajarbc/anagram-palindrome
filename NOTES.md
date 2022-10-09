# Test
`npm test`
# Build
`npm run build`
# Build Documentation
`npm run doc`
# Pack and run it locally
1. `npm pack`
2. copy `anagram-palindrome-0.3.2.tgz` (`0.3.2` is the current version in package.json) and paste to different location (for example `test-package`), in which has package.json
3. in the `test-package/package.json`, add 
   ```json
     "dependencies": {
        "anagram-palindrome": "file:anagram-palindrome-0.3.2.tgz"
    }
   ```
4. (Still in `test-package` directory) Run `npm install`
