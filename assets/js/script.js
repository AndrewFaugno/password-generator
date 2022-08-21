// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // define vars
  let upper;
  let lower;
  let numbers;
  let special;

  // define length prompt
  let length = (prompt('Please enter password length\n(8 - 128)'))

  // get password length, re-prompt if value is not a int between 8-128
  while (true) {
    if (length < 8 || length > 128) {
      length = prompt('Please enter valid password length\n(8 - 128)')
    } else {
      break;
    }
  }

  // prompt for uppercase letters
  if (confirm('Would you like uppercase letters in your password?')) {
    upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else {
    upper = '';
  }

  if (confirm('Would you like lowercase letters in your password?')) {
    lower = 'abcdefghijklmnopqrstuvwxyz';
  } else {
    lower = '';
  }

  if (confirm('Would you like numbers in your password?')) {
    numbers = '0123456789';
  } else {
    numbers = ''
  }

  if (confirm('Would you like special characters in your password?')) {
    special = "~`!@#$%^&*_-+=|',.?/";
  } else {
    special = '';
  }

  let passwordChars = upper.concat(lower, numbers, special);
  console.log(length, passwordChars)
  var password = generatePassword(length, passwordChars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(length, passwordChars) {
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
