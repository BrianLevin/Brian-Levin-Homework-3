// Assignment Code
var generateBtn = document.querySelector("#generate");
// created arrays to hold values
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]; //MAth.random() b
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '@', "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",];
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button

// Found how to make a  functioning button online and  put it within the Evenet Listener put all my code within the event listener so the final answer can generate on the page.

generateBtn.addEventListener("click", function () {
    // Added a variety of of character choice prompts for  the user to choose from.
    // Added a do while loop for the user to pick how many charatcers they want in there password.
    do {
        var charLength = Number(prompt("How many characters do you want your passward to contain? 'Pick between 8 and 128'"));
    } while (charLength >= 8 || charLength <= 128);
    //check if the legth proper here
    varharTypeLower = prompt("Do you want lower case letters in your password? Type: 'lower case'.")
    var charTypeUpper = prompt(" Do you want upper case letters in your password? Type: 'upper case'. ");
    var charTypeNumbers = prompt("do you want numbers in your password?type numbers? Type: 'numbers'.");
    var charTypeSpecial = prompt("do you want special characters in your password? Type: 'special'.");
    //var charTypeMixed = prompt("Do you want mixed characters in your password Type: 'mixed.'");
    // created a function which will help set up and generate the password
    function generatePassword() { //
        // && ||
        // created the charSet varible to hold the final value for the Javascript to utilize.
        // created the charType.toLowerCase() varibles  for the charset for the results to be displayed  on the page also created differant varibles to hold each key the user chooses..
        var charSet = " ";
        //var charTypeLower2 = charType.toLowerCase();
        //var charTypeUpper2 = charType.toLowerCase();
        //var charTypeLNumber2 = charType.toLowerCase();
        //var charTypeSpecial2 = charType.toLowerCase();
        //var charTypeMixed2 = charType.toLowerCase();
        //var charactersp = [lowe]
        //Made  if and else if statements for each case the user may choose.
        //while (charLength >= 8 || charLength <= 128) { // make differant loops instead of if else statements?
        //charLength;
        //}
        if (charTypeLower === "lower case" || charTypeLower === "upper case" || charTypeLower === "numbers" || charTypeLower === "special") {  // make for loops within if else if statements?  how to exicute function afterwards
            charSet = [lowercase, uppercase, numbers, specialChar]
        }

        else if (charTypeLower === "lower case" || charTypeLower === "upper case" || charTypeLower === 'numbers') {
            charSet = [lowercase, uppercase, numbers,];
        }

        else if (charTypeLower === "numbers" || charTypeLower === "special") {
            charSet = [numbers, specialChar];
        }
        else if (charTypeSpecial2 === "special") {
            charSet = [specialChar];
        }
        //else if (charTypeMixed2 === "mixed") {
        //charSet = "123ASDSD5hhgggfdesee54345$$^^$##llIII456&^$#@!ABCDEFGhijklmnop";

        // }
        // created the return value to hold the for loop value.
        // created the for loop to  run through  the differant random scenaros of the users choice.

        var returnValue = ""; // created the for loop to  run through  the differant random scenaros of the users choice.


        for (var i = 0; i < charLength; i++) {
            returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length))
                ;
        }
        return returnValue; // the return key will start the exacution of the function
    }
    return (generatePassword()); // the return generatePassword will show the final result of the random password generator.
});





