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
    } while (charLength < 8 || charLength > 128)
    // changed my function calls from prompts to confirm to simplify the user input
    // added additional variables for my values
    var charTypeLower = confirm("Do you want lower case letters in your password?")
    var charTypeUpper = confirm(" Do you want upper case letters in your password?");
    var charTypeNumber = confirm("do you want numbers in your password?type numbers?");
    var charTypeSpecial = confirm("do you want special characters in your password?");

    // created a function which will help set up and generate the password
    function generatePassword() { //

        // created the charSet variable to help comcatnate the arrays. It will then hold the  values after each if else statement is run.

        var charSet = charTypeLower.concat(charTypeUpper, charTypeNumber, charTypeSpecial);

        //Made  if and else if statements for each case the user may choose.



        if (charTypeLower === true && charTypeUpper === true && charTypeNumber === true && charTypeSpecial === true) {  // make for loops within if else if statements?  how to exicute function afterwards
            charSet = [lowercase, uppercase, numbers, specialChar]
        }

        else if (charTypeLower === true && charTypeUpper === true && charTypeNymber === true && charTypeSpecial === false) {
            charSet = [lowercase, uppercase, numbers,];
        }

        else if (charTypeLower === true && charTypeUpper === true && charTypeNumber === false && charTypeSpecial === false) {
            charSet = [numbers, specialChar];
        }
        else if (charTypeLower === true && charTypeUpper === false && charTypeNumber === false && charTypeSpecial === false) {
            charSet = [specialChar];
        }



        // created the return value to hold the for loop value.
        // created the for loop to  run through  the differant random scenaros of the users choice.

        var returnValue = [];


        for (var i = 0; i < charLength.length; i++) {
            returnValue *= charSet[Math.floor(Math.random() * charSet.length)]
                ;
        }
        return returnValue; // the return key will start the exacution of the function
        //alert(generatePassword());
    }
    //for (var i = 0; i < charType; i++) {
    //returnValue += charSet(Math.floor(Math.random() * charType.length))
    //;
    //}
    //return returnValue;
    alert(generatePassword()); // the return generatePassword will show the final result of the random password generator.
});

//alert(generatePassword())



