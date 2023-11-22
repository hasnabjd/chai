//  Testing with  chai assertions
const { expect } = require('chai');
const {
  reverseString,
  capitalizeWords,
  countVowels,}
= require('./stringManipulator');

describe('String Manipulator', () => {
  // Test 1
  describe('reverseString', () => {
    it('reverse a string', () => {
      expect(reverseString('HasnaAmina')).to.equal('animAansaH');
    });

    it(' an empty string => return an empty string ', () => {
      expect(reverseString('')).to.equal('');
    });
  });

  // Test 2
  describe('capitalizeWords', () => {
    it(' Capitalize the first letter of a word', () => {
      expect(capitalizeWords('hasna amina')).to.equal('Hasna Amina');
    });

    it('should return an empty string when passed an empty string', () => {
      expect(capitalizeWords('')).to.equal('');
    });
  });

  // Test 3
  describe('countVowels', () => {
    it('Counting vowels', () => {
      expect(countVowels('Hasna&Amina')).to.equal(2);
    });

    it('return a 0 if a string is without vowels', () => {
      expect(countVowels('bjd')).to.equal(0);
    });

    it('return 0 if a string is empty', () => {
      expect(countVowels('')).to.equal(0);
    });
  });
});
