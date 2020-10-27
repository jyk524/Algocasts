// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Put stringA and stringB into an array format to get seperate letters
  // Lower Case and replace are string methods
  let stringAlower = stringA.toLowerCase().replace(/[^a-zA-Z]/g, "");
  let stringBlower = stringB.toLowerCase().replace(/[^a-zA-Z]/g, "");

  let arrA = stringAlower.split(""); //["b", "y", "e"]
  let arrB = stringBlower.split(""); //["h", "i", "t", "z"]
  console.log(arrA);

  // Sort both arrays
  let sortedA = arrA.sort().join(""); //["b", "e", "y"]
  let sortedB = arrB.sort().join("");
  // Compare sorted array
  if (sortedA === sortedB) {
    return true;
  } else {
    return false;
  }
}
module.exports = anagrams;
