// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria, writePassword);


//first thing: Collect password criteria
function getCriteria () {
  prompt("How long would you like your password to be? (between 8 and 124 characters)")
  confirm("would you like to include uppercase?")
  confirm("would you like to include lowercase?")
  confirm("Would you like special characters?")
  confirm("Would you like your password to contain numbers?")
} 