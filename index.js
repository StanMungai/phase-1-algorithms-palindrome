function isPalindrome(word) {
  // Write your algorithm here
  // check if the argument in parameter word is a string with typeof function
  // declare an empty string 
  // loop through the argument and add the last index's value to the empty string
  // convert both strings to lower case
  // perform logic comparison of the two strings


  /* 
    Add your pseudocode here
  */

  /*
    Add written explanation of your solution here
  */
  // creating an empty variable of type string
  let reversedWord = '';
  let len = word.length - 1;
  //check if the argument is a string.
  if (typeof(word) === 'string') {
    for (let i=len; i >= 0; i--) {
      reversedWord += word[i]
    }
    return reversedWord.toLowerCase() === word.toLowerCase()
  }
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('Stanford'));
}

module.exports = isPalindrome;
