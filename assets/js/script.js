// Assignment code here
var UPPERCASE = ["A", "B", "C"];
var LOWERCASE = ["a", "b", "c"];
var NUMBERS = ["1", "2", "3"];
var SPECIAL = ["!", "$", "%"];

function generatePassword() {
  //length of password, lower, upper, num/spec
  var passwordLength = 0;
  while (!(passwordLength >= 8) || !(passwordLength <= 128)) {
    passwordLength = prompt("how long?, Must be between 8-128 characters.");
  }

  var includeLower = confirm("Include lowercase letters?");
  var includeUpper = confirm("Include uppercase letters?");
  var includeNumber = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");
  console.log(
    passwordLength,
    includeLower,
    includeUpper,
    includeNumber,
    includeSpecial
  );
  // Get info from user to generate password.
  // Generate password based on criteria
  var characterPool = [];
  //var children = hege.concat(stale);
  if (includeUpper) {
    characterPool = characterPool.concat(UPPERCASE);
  }
  if (includeLower) {
    characterPool = characterPool.concat(LOWERCASE);
  }
  if (includeNumber) {
    characterPool = characterPool.concat(NUMBERS);
  }
  if (includeSpecial) {
    characterPool = characterPool.concat(SPECIAL);
  }
  console.log(characterPool);
  var password = "";
  for (var x = 0; x < passwordLength; x++) {
    console.log(x);
    randomChar = characterPool[rand(0, characterPool.length)];
    password = password + randomChar;
  }

  return password;
}
//this creates the initial password generation prompt list
function rand(lo, hi) {
  diff = hi - lo;
  return Math.floor(Math.random() * diff) + lo;
}

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

// pwCriteria();
