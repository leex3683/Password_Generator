// Assignment code here
let upperLib = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerLib = "qwertyuiopasdfghjklzxcvbnm";
let numLib = "1234567890";
let speLib =  ' !"#$%&' + "()*+,-./:;<=>?@[\]^_`{|}~";
function generatePassword(){
  charnum = prompt("Enter Number of Characters 8 - 128");
  if(charnum == null){return;};
  boolUpper = confirm("Do you want upper case characters? Choose 'ok' to include, or 'cancel' to exclude");
  boolLower = confirm("Do you want lower case characters? Choose 'ok' to include, or 'cancel' to exclude");
  boolNum = confirm("Do you want numbers? Choose 'ok' to include, or 'cancel' to exclude");
  boolSpe = confirm("Do you want special characters? Choose 'ok' to include, or 'cancel' to exclude");

}


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password =  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
