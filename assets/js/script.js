// the variables including all the characters that will be selected for randomization by the generator.
var UPPERCASE = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var LOWERCASE = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SPECIAL = ["!", "$", "%", "&", "*", "#"];

//the function below is going to generate the password using the character pools once the prompts are satisfied by the user.
function generatePassword() {
  //the variable prompts the user to choose the length of password and if it includes lower, upper, num/spec. characters
  var passwordLength = 0;
  while (!(passwordLength >= 8) || !(passwordLength <= 128)) {
    passwordLength = prompt(
      "How long would you like for the password to be?, Must choose a length between 8-128 characters."
    );
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
  // Generate password based on criteria by concatinating the characterPool variable with the 4 options.
  var characterPool = [];
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

//sends an alert to the user telling them what the password should include.
function pwCriteria() {
  window.alert(
    " -the password must be at least 8 characters but no more than 128. - the password can include: lower case and/or upper case letters, numbers and/or special characters"
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
