var generateBtn = document.querySelector("#generate");

const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lower = "qwertyuiopasdfghjklzxcvbnm";
const number = "1234567890";
const special = "!@#$%^&*()_+";
var possibleCharacters = '';

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

function generatePassword(length) {
  var result = ' ';
  var upperCase = confirm("Do you want to include uppercase letters?");
  var lowerCase = confirm("Do you want to include lowercase letters?");
  var numerics = confirm("Do you want to include numbers?");
  var specialCase = confirm("Do you want to include special characters? !@#$%^&*()_+");

  if (upperCase) {
    possibleCharacters += upper;
  }
  if (lowerCase) {
    possibleCharacters += lower;
  }
  if (numerics) {
    possibleCharacters += number;
  }
  if (specialCase) {
    possibleCharacters += special;
  }

  if (possibleCharacters.length <= 0) {
    result += "You must pick atleast one character type!";
    return result;
  }

  while (result.length < length) {
    result += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  return result;

}

generateBtn.addEventListener("click", writePassword);

