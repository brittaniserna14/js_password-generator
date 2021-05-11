// Assignment code here
//this creates the initial password generation prompt list

function pwCriteria() {
  window.alert(
    " -the password must be at least 8 characters, - the password must include: lower case and upper case letters, numbers and/or special characters"
  );
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

pwCriteria();
