
//var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type
//var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
//function generatePassword() {
//evaluate character type
//var charSet = "";
//var charTypeLower = charType.toLowerCase();
//if (charTypeLower === "lowercase") {
//charSet = "abcdefghijklmnopqrstuvwxyz";
//} else if (charTypeLower === "uppercase") {
//charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//} else if (charTypeLower === "numeric") {
// charSet = "0123456789";
//} else if (charTypeLower === "special") {
//charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//}
//return value
//var retVal = "";
//for (var i = 0; i < length; i++) {
//picks a character within charSet at index of random number
//retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
//}
//return retVal;
//}
//alert(generatePassword());


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button


// Found how to make a  functioning button online and  used it as my own function.

generateBtn.addEventListener("click", function () {
    var char = alert("How many Characters do you want your passward to contain?");
});
