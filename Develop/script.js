// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: Create array for each character specification

var userinputArray = []; // An empty Array to store all user input

var specialCharacter = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','[','{',']','}','|'];
var lowercaseCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','X','Y','Z'];
var numberCharacters = ['1','2','3','4','5','6','7','8','9'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//TODO Create generatePassword () Function:

function generatePassword () {

  var password = ""; // This ensures that whenever this function is called, the password variable starts blank.
 
  for(var i = 0; i < passwordLength; i++) { //This is a for loop  which says, start at 0, and add one until you reach the variable passwordLength variable.
 
  var randomSelection = Math.floor(Math.random() * userinputArray.length) //This says to find randomly selected index's in the userinputArray.
 
  password = password + userinputArray[randomSelection]; // This line concatonates the randomly selected indexes until the passwordLength interger is reached.
 
 }
   return password; //This returns the concatonated and randomised userinput array with the desired password length.
 
 }


//TODO: Prompt the user for the password Criteria




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