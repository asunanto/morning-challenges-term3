/*
Write code which will return the common characters found in
two different strings. You should only need to return the
characters once.

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""

*/

const commonCharacters = (string1, string2) => {
    string1 = string1.replace(/ /g,'')
    string2 = string2.replace(/ /g,'')
    let hash1 = {}, hash2 = {}, common_char ="" 
    for (char1 of string1)
        hash1[char1] = 1
    for (char2 of string2)
        hash2[char2] = 1
    for (char in hash1)
        if (hash1[char] === hash2[char]) common_char += char
    return common_char
    // let array1 = [...new Set(string1.replace(/ /g,''))] ,array2 = [...new Set(string2.replace(/ /g,''))]
    // return array1.filter(char1 => array2.includes(char1)).join('')

}

// Your Code Should Pass:
const chai = require('chai');
const should = chai.should();

describe('Common Characters', () => {
    it('returns commons characters', () => {
        commonCharacters('abc', 'abc').should.equal('abc')
    })

    it('returns common characters', () => {
        commonCharacters("What is love?", "Baby don't hurt me").should.equal('hatoe')
    })

    it('returns common characters', () => {
        commonCharacters('Riding on a buffalo makes me more approachable', 'so what').should.equal('oash')
    })

    it('returns empty string', () => {
        commonCharacters('', 'No more').should.equal('')
    })

    it('returns empty string', () => {
        commonCharacters('No more', '').should.equal('')
    })

    it('returns empty string', () => {
        commonCharacters('', '').should.equal('')
    })
})