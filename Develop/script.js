// Assignment code here
var lowercaseCharacters = ['a','b', 'c', 'd', 'e','f','g','h', 'i', 'j','k','l', 'm', 'n', 'o', 'p', 'q', 'r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters =['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','-', '_', '+', '=', '~', "'",':', ';', '.', '{', '}', '[', ']', '?', '/', '\\', '|']

// Function for password options prompt
function passwordOptions () {
  // Password length
  var length = parseInt (
    prompt ("How many characters long would you like your password to be? 8 to 128 characters")
  );

  if (length >= 8 && length <= 128){
    window.alert("Character length is" + length);
  }
  else {
    window.alert("Please enter a number between 8 and 128.");
    return;
  }

  var specialChar = confirm(
    "Would you like to have special characters in your password?"
  );

  var numericChar = confirm(
    "Would you like numbers in your password?"
  );

  var lowerChar = confirm(
    "Would you like lowercase letters in your password?"
  );

  var upperChar = confirm(
    "Would you like uppercase letters in your password?"
  );

  if (
    specialChar === false &&
    numericChar === false &&
    lowerChar === false &&
    upperChar === false
  ) {
    alert("You must select at least one character type.");
    return;
  }

  var passwordOptions = {
    length: length,
    specialChar: specialChar,
    numericChar: numericChar,
    lowerChar: lowerChar,
    upperChar: upperChar
  };

  return passwordOptions;
    
}

function createRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElem = arr[randomIndex];

  return randomElem;
}

function createPassword() {
  var options = passwordOptions();
  var result =[];
  var possibleCharacters = [];
  var guarnteedCharacters = [];

  if (options.lowerChar) {
    possibleCharacters = possibleCharacters.contact(lowercaseCharacters);
    guarnteedCharacters.push(getRandom(lowercaseCharacters));
  }

  if (options.upperChar) {
    possibleCharacters = possibleCharacters.contact(uppercaseCharacters);
    guarnteedCharacters.push(getRandom(uppercaseCharacters));
  }

  if (options.numericChar) {
    possibleCharacters = possibleCharacters.contact(numericCharacters);
    guarnteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.specialChar) {
    possibleCharacters = possibleCharacters.contact(specialCharacters);
    guarnteedCharacters.push(getRandom(specialCharacters));
  }

}








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
