// Variable equals generate button
var generateBtn = document.querySelector("#generate");
var testPassword = [];
// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = testPassword;
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  for(let i = 1; i <= 8; i+1) {
    testPassword.push(i++)
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
