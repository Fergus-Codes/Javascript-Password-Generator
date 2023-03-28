// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: Create array for each character specification

var userinputArray = []; // An empty Array to store all user input

var specialCharacter = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','[','{',']','}','|'];
var lowercaseCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','X','Y','Z'];
var numberCharacters = ['1','2','3','4','5','6','7','8','9'];

// Write password to the #password input

//TODO: Edit the writePassword function to say "Invalid user input" if input is invalid.

function writePassword() {
  
  var validuserInput = getuserInput(); // this returns true or false
  var passwordText = document.querySelector("#password"); //Moved before the if statement so that we can see password text regardless of the outcome of IF statement.

 if(validuserInput) { //if all inputs from user are valid, run below code
 
  var Generatedpassword = generatePassword(); // This is connecting the generatePassword function to the Generatedpassword variable.
  

  passwordText.value = Generatedpassword; // This is telling the js file to print the Generatedpassword Value to the box in above the generate password button.

} else {

  passwordText.value = "Invalid user input" // This else statement tells the user if any invalid input has been input.

}
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

function getuserInput () { //This function to collect user inputs.

  userinputArray = []; //Reset the array to nil everytime the getuserInput function is called.

 var passwordLength = parseInt(prompt("How long should your password to be? (between 8 and 124 characters)")); // This logs the desired password length into 

if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ) { //This validates whether the user has put a valid number into the input box, and asks them to try again if not.
  
 alert("Please input a valid number (1,2,3,4,5) etc, and ensure that it is between 8 & 124 characters.")

 return false; // This returns the function as false, ensuring that it will be run again if an invalid prompt is put in.

}

if (passwordUppercaseIncluded = confirm("Would you like Uppercase characters included?")) {// asks user if they want uppercase characters 
  userinputArray = userinputArray.concat(uppercaseCharacter); // If user wants uppercase, all uppercase characters specified in the "uppercaseCharacter" array is concatonated to the userinputArray.
}

if (passwordLowercaseIndluded = confirm("Would you like Lowercase characters included?")) {
  userinputArray = userinputArray.concat(lowercaseCharacter) 
}

if(passwordSpecialCharactersIncluded = confirm("Would you like special characters included?")) {
  userinputArray = userinputArray.concat(specialCharacter)
}

if(passwordNumbersIndluded = confirm("Would you like numbers included?")) {
  userinputArray = userinputArray.concat(numberCharacters)
}

return true;

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