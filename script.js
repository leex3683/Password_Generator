// Assignment code here
let upperLib = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerLib = "qwertyuiopasdfghjklzxcvbnm";
let numLib = "1234567890";
let speLib =  ' !"#$%&' + "()*+,-./:;<=>?@[\]^_`{|}~";
function generatePassword(){
  password = ""
  charnum = prompt("Enter Number of Characters 8 - 128");
  if(charnum == null){return;};
  let boolUpper = confirm("Do you want upper case characters? Choose 'ok' to include, or 'cancel' to exclude");
  
  if(boolUpper == true){password += upperLib;};
  console.log(password);
  
  let boolLower = confirm("Do you want lower case characters? Choose 'ok' to include, or 'cancel' to exclude");
  if(boolLower == true){password += lowerLib;};
  console.log(password);
  
  let boolNum = confirm("Do you want numbers? Choose 'ok' to include, or 'cancel' to exclude");
  if(boolNum == true){password += numLib;};
  console.log(password);
  
  let boolSpe = confirm("Do you want special characters? Choose 'ok' to include, or 'cancel' to exclude");
  if(boolSpe == true){password += speLib;};
  console.log(password);
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
