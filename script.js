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
    } while (charLength >= 8 || charLength <= 128)
    if (charLength >= 8 || charLength <= 128) {
        return true;
    }

    //check if the legth proper here
    var charType = prompt("Do you want lower case letters in your password? Type: 'lower case'.")
    var charType = prompt(" Do you want upper case letters in your password? Type: 'upper case'. ");
    var charType = prompt("do you want numbers in your password?type numbers? Type: 'numbers'.");
    var charType = prompt("do you want special characters in your password? Type: 'special'.");

    // created a function which will help set up and generate the password
    function generatePassword() { //

        // created the charSet varible to hold the final value for the Javascript to utilize.

        var charSet = " ";

        //Made  if and else if statements for each case the user may choose.



        if (charType === "lower case" && charTypeLower === "upper case" && charTypeLower === "numbers" && charTypeLower === "special") {  // make for loops within if else if statements?  how to exicute function afterwards
            charSet = [lowercase, uppercase, numbers, specialChar]
        }

        else if (charType === "lower case" && charTypeLower === "upper case" && charTypeLower === 'numbers') {
            charSet = [lowercase, uppercase, numbers,];
        }

        else if (charType === "numbers" && charTypeLower === "special") {
            charSet = [numbers, specialChar];
        }
        else if (charType === "special") {
            charSet = [specialChar];
        }
        //else if (charTypeMixed2 === "mixed") {
        //charSet = "123ASDSD5hhgggfdesee54345$$^^$##llIII456&^$#@!ABCDEFGhijklmnop";

        // }
        // created the return value to hold the for loop value.
        // created the for loop to  run through  the differant random scenaros of the users choice.

        var returnValue = ""; // created the for loop to  run through  the differant random scenaros of the users choice.


        for (var i = 0; i < charLength; i++) {
            returnValue += charSet(Math.floor(Math.random() * charSet.length))
                ;
        }
        return returnValue; // the return key will start the exacution of the function
    }
    return (generatePassword()); // the return generatePassword will show the final result of the random password generator.
});





