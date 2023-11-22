

// Reversing a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Capitalize a word 
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  // Counting vowels
  function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }
  
  module.exports = {
    reverseString,
    capitalizeWords,
    countVowels,
  };
  