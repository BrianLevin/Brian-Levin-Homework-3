
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
    // Added a variety of of character choice prompts for  the user to choose from.
    var charLength = prompt("How many characters do you want your passward to contain?");
    var charTypeLower = prompt("Do you want lower case letters in your password?");
    var charTypeUpper = prompt(" Do you want upper case letters in your password ");
    var charTypeNumber = prompt("do you want numbers in your password?");
    var charTypeSpecial = prompt("do you want special characters in your password");
});
// created a function which will help set up and generate the password
function generatePassword()
// created the charSet varible to hold the users potential choices of characters that  the javascript will utilize
var charSet = " ";
var charTypeLower2 = charType.toLowerCase();
//Made  if and else if statements for each case the user may choose
if (charTypeLower === "lower case") {
    charSet = "abcdefghijklmnopqrstuvwxyz";
}

else if (charTypeUpper === "upper case") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

else if (charTypeNumber === "number") {
    charSet = "0123456789";
}
else if (charTypeSpecial === "special") {
    charSet = "!@#$%^&*()_+";
}


