// Variable equals generate button
var generateBtn = document.querySelector("#generate");

// Constant variable that holds all possiible characters
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&?";

// Write password to the #password input
function writePassword() {
  var length2 = prompt("How long should the password be? (must be between 8-128");
  if (length2 >= 8 && length2 <= 128) {
    var passwordText = document.querySelector("#password");
    passwordText.value = generatePassword(length2); 
  } else {
    var passwordText = document.querySelector("#password");
    passwordText.value = "Password must be between 8-128 characters long!"; 
  }
}

// 1. Series of prompts for password criteria
// 1a. Length prompt 8-128
// 1b. Different character types prompt
// 2. Validate input, atleast one character type selected
// 3. Password is generated matching selected criteria

function generatePassword(length) {
  var result = ' ';
  var passwordLength = characters.length;
  var upperCase = confirm("Do you want to include uppercase letters?");
  var lowerCase = confirm("Do you want to include lowercase letters?");
  var numerics = confirm("Do you want to include numbers?");
  var specialCase = confirm("Do you want to include special characters? (!@#$%&?)");
  if (upperCase == true && lowerCase == true && numerics == true && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == false && lowerCase == true && numerics == true && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == false && numerics == true && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("abcdefghijklmnopqrstuvwxyz", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == true && numerics == false && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("0123456789", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == true && numerics == true && specialCase == false) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("!@#$%&?", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == false && lowerCase == false && numerics == true && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == false && numerics == false && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("abcdefghijklmnopqrstuvwxyz0123456789", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == true && numerics == false && specialCase == false) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("0123456789!@#$%&?", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == false && lowerCase == true && numerics == false && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == false && numerics == true && specialCase == false) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == false && numerics == true && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == false && lowerCase == true && numerics == true && specialCase == false) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == false && lowerCase == false && numerics == false && specialCase == true) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == true && lowerCase == false && numerics == false && specialCase == false) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == false && lowerCase == true && numerics == false && specialCase == false) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (upperCase == false && lowerCase == false && numerics == true && specialCase == false) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.replace("", '').charAt(Math.floor(Math.random() * passwordLength));
    }
  } else {
      result += "You must choose atleast one kind of character!";
  }
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

