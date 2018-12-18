/*
Find the unique string in an array, which should all contain letters.

Example:
uniqueString(["alright", "isod", "Alright", "ALRIGHT"]) => "isod"

Test your solution:
mocha 22_uniqueString.js
*/

function uniqueString(array) {
    let hash = {}
    for (string of array) {
        let uniq_string = [...new Set(string.toLowerCase())].sort().join('')
        if (hash[uniq_string] === undefined) hash[uniq_string] = []
        hash[uniq_string].push(string)
    }
    for (key in hash) {
        if (hash[key].length === 1) return hash[key][0]
    }   
}

const assert = require('assert')

describe('Unique string challenge', function() {
    it('Should return the unique string', function() {
        assert.deepEqual(uniqueString(['aa', 'AaA', 'aaaa', 'bBbB', 'aAaA', 'a']), 'bBbB')
        assert.deepEqual(uniqueString(['kios', 'foo', 'ikos', 'ikso', 'kois', 'kiso']), 'foo')
        assert.deepEqual(uniqueString(['abc', ' ', '  ']), 'abc')
    })
})