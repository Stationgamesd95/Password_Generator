// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var totalPassword = "";
var completePassword = "";
//array for lowercase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//array for uppercase letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//array for numbers
var numbers2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//array for special characters
var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", "-", ".", ",", "/", ":", ";", "<", "=", ">", "?", "@"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//For function generatePassword(), had to add completePassword and total password inside the (). For the prompt, I added between 6 to 8.

function generatePassword(completePassword, totalPassword) {
 var completePassword = "";
 var totalPassword = "";
  //Ask how many characters you want
  var usernumCharts = prompt("How many characters (between 6 to 128) do you want your password?");
  //Ask for lowercase letters
  var userlowerCase = confirm("Do you want lowercase letters for your password?");
  //Ask for uppercase letters
  var userupperCase = confirm("Do you want uppercase letters for your password?");
  //Ask for numbers
  var usernumbers2 = confirm("Do you want numbers for your password?");
  //Ask for special characters
  var userspecialChar = confirm("Do you want special characters for your password?");
  //Start condtional if/else and build up a string
  // If yes to lower case, upper case, numbers, special characters




  if (userlowerCase) {
    totalPassword += lowerCase.join("");
    console.log(totalPassword);
  }

  if (userupperCase) {
    totalPassword += upperCase.join("");
    console.log(totalPassword);
  }
  if (usernumbers2) {
    totalPassword += numbers2.join("");
    console.log(totalPassword);
  }
  if (userspecialChar) {
    totalPassword += specialChar.join("");
    console.log(totalPassword);
  }

  // for (let index = 0; index < usernumCharts; index++) {
  //   completePassword += totalPassword[Math.floor(Math.random() * totalPassword.length)];

// Made a bit of changes for the Math.floor(Math.random)
// 6 -> 122, 123 would mean 129 will not show up
//alert statement was difficult to add since the else statement had an error
//When not meeting the requirements to add the password, it would say undefined, althought some words are added with it.

  for (let index = 0; index < usernumCharts; index++) {
    completePassword += totalPassword[Math.floor(Math.random() * 123) + 6];
  
  }
  console.log(completePassword);
  return completePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);