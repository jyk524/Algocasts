// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //empty result array
  let result = [];
  //seperate each word, store into an array of words
  let strWord = str.split(" "); // [“A”, “short”, “sentence”]
  //   console.log(strWord);
  for (let i = 0; i <= strWord.length - 1; i++) {
    //capitalize the first lette
    let firstLetter = strWord[i].charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    // console.log(firstLetterCap);
    //remove the 1st letter
    let removeFirst = strWord[i].slice(1);
    // console.log(removeFirst);
    //replace with firstLetterCap
    let newString = firstLetterCap + removeFirst;
    // console.log(newString);
    let results = result.push(newString);
    // console.log;
  }
  return result.join(" ");
}
module.exports = capitalize;
