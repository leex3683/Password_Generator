// Assignment code here
let upperLib = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerLib = "qwertyuiopasdfghjklzxcvbnm";
let numLib = "1234567890";
let speLib = ' !"#$%&' + "()*+,-./:;<=>?@[]^_`{|}~" + "\\";

function generatePassword() {
  let password = "";
  let passwordPool = "";
  charnum = prompt("Enter Number of Characters 8 - 128");
  if (charnum == null) { return ""; };
  //If selected num is in range, create pool of num to draw from. Otherwise, line 37: alert user
  ////to select a num in range, and rerun function.
  if((charnum - Math.floor(charnum)) !== (charnum - charnum)){
    alert("Please choose an integer in the interval");
    return generatePassword();
  }
  if (charnum > 7 && charnum < 129) {

    let boolUpper = confirm("Do you want upper case characters? Choose 'ok' to include, or 'cancel' to exclude");
    if (boolUpper == true) { passwordPool += upperLib; };
    console.log(passwordPool);

    let boolLower = confirm("Do you want lower case characters? Choose 'ok' to include, or 'cancel' to exclude");
    if (boolLower == true) { passwordPool += lowerLib; };
    console.log(passwordPool);

    let boolNum = confirm("Do you want numbers? Choose 'ok' to include, or 'cancel' to exclude");
    if (boolNum == true) { passwordPool += numLib; };
    console.log(passwordPool);

    let boolSpe = confirm("Do you want special characters? Choose 'ok' to include, or 'cancel' to exclude");
    if (boolSpe == true) { passwordPool += speLib; };
    console.log(passwordPool);

    if (passwordPool == "") {
      alert("Please choose at least one character type to continue");
      return generatePassword();
    }

  } else {
    alert("Please choose an integer in the interval");
    return generatePassword();
    
  }

//each iteration chooses one letter at random from pool of numbers, and then adds it on to the pw string
  for (i = 0; i < charnum; i++) {
    password += passwordPool[Math.floor(Math.random() * passwordPool.length)];
  }

  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
