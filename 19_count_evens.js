/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
  let counter = 0
  for (num of arr) {
    if (num % 2 == 0) counter++
  }
  return counter
}
  
// Your tests here
const assert = require('assert')

describe('countEvens', function() {
  context('Should return the correct number of odds in an array', function() {
    it('Should return 2 with [1,2,3,4]', function () {
      assert.equal(countEvens([1, 2, 3, 4]), 2)
    })
    it('Should return 3 with [1,2,3,4,5,6]', function () {
      assert.equal(countEvens([1,2,3,4,5,6]), 3)
    })
    it('Should return 0 with [0,1]', function () {
      assert.equal(countEvens([1,3,5]), 0)
    })
  })
  context('Should return 0 for invalid inputs', function() {
    it('Should return 0 with empty array', function() {
      assert.equal(countEvens([]),0)
    })
    it('Should return 0 with an array of chars', function() {
      assert.equal(countEvens(['a','b','c']),0)
    })
    it('Should handle an array of chars and numbers', function() {
      assert.equal(countEvens(['aa','b','c',1,2]),1)
    })
  })
})