
// created arrays to hold values
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];  //MAth.random() b
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Function to prompt user for password options
function getPasswordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
        prompt('How many characters would you like your password to contain?')
    );
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length) === true) {
        alert('Password length must be provided as a number');
        return;
    }
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8) {
        alert('Password length must be at least 8 characters');
        return;
    }

    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 128) {
        alert('Password length must less than 129 characters');
        return;
    }

    // created a function which will help set up and generate the password
    function generatePassword() { //

        // created the charSet variable to help comcatnate the arrays. It will then hold the  values after each if else statement is run.
        var charSet = []
        //var charSet = charTypeLower.concat(charTypeUpper, charTypeNumber, charTypeSpecial); // experimental code i couldnt use

        //if (charTypeLower) [charSet = charSet.concat(TypeLowerarr)]  experimental code I couldnt use
        //else if (charTypeUpper) [charSet = charSet.concat(TypeUpperarr)]
        //else if (charTypeNumber) [charSet = charSet.concat(TypeNumberarr)]
        //else if (charTypeSpecial) [charSet = charSet.concat(TypeSpecialarr)]








        //Made  if and else if statements for each case the user may choose.



        if (charTypeLower === true && charTypeUpper === true && charTypeNumber === true && charTypeSpecial === true) {  // make for loops within if else if statements?  how to exicute function afterwards
            charSet = [lowercase, uppercase, numbers, specialChar]
            charSet = charSet.concat(lowercase, uppercase, numbers, specialChar);
            // [a,b,c,d,e, A,B,C]
        }

        else if (charTypeLower === true && charTypeUpper === true && charTypeNymber === true && charTypeSpecial === false) {

            charSet = [lowercase, uppercase, numbers,];
            charSet = charSet.concat(lowercase, uppercase, numbers);
        }

        else if (charTypeLower === true && charTypeUpper === true && charTypeNumber === false && charTypeSpecial === false) {
            charSet = [lowercase, uppercase];
        }
        else if (charTypeLower === true && charTypeUpper === false && charTypeNumber === false && charTypeSpecial === false) {
            charSet = [specialChar];

        }
        else if (charTypeUpper === true && charTypeLower === true && charTypeNumber === true && charTypeSpecial === true) {
            charSet = [uppercase, lowercase, numbers, specialChar];
        }
        else if (charTypeUpper === true && charTypeLower === true && charTypeNumber === true && charTypeSpecial === false) {
            charSet = [uppercase, lowercase, numbers,];
        }
        else if (charTypeUpper === true && charTypeLower === true && charTypeNumber === false && charTypeSpecial === false) {
            charSet = [uppercase, lowercase];
        }
        else if (charTypeUpper === true && charTypeLower === false && charTypeNumber === false && charTypeSpecial === false) {
            charSet = [uppercase];
        }
        else if (charTypeNumber === true && charTypeLower === true && charTypeUpper === true && charTypeSpecial === true) {
            charSet = [numbers, lowercase, uppercase, specialChar];
        }
        else if (charTypeNumber === true && charTypeLower === true && charTypeUpper === true && charTypeSpecial === false) {
            charSet = [numbers, lowercase, uppercase,];
        }
        else if (charTypeNumber === true && charTypeLower === true && charTypeUpper === false && charTypeSpecial === false) {
            charSet = [numbers, lowercase];
        }
        else if (charTypeNumber === true && charTypeLower === false && charTypeUpper === false && charTypeSpecial === false) {
            charSet = [numbers];
        }
        else if (charTypeSpecial === true && charTypeLower === true && charTypeUpper === true && charTypeNumber === true) {
            charSet = [specialChar, lowercase, uppercase, numbers,];
        }
        else if (charTypeSpecial === true && charTypeLower === true && charTypeUpper === true && charTypeNumber === false) {
            charSet = [specialChar, lowercase, uppercase,];
        }
        else if (charTypeSpecial === true && charTypeLower === true && charTypeUpper === false && charTypeNumber === false) {
            charSet = [specialChar, lowercase,];
        }
        else if (charTypeSpecial === true && charTypeLower === false && charTypeUpper === false && charTypeNumber === false) {
            charSet = [specialChar,];
        }
        // created the return value to hold the for loop value.


        var returnValue = [charSet];

        // created the for loop to  run through  the differant random scenaros of the users choice.
        for (var i = 0; i < charSet.length; i++) {
            returnValue *= charSet[Math.floor(Math.random() * charSet.length)]
                ;
        }
        return returnValue; // the return key will start the exacution of the function

    }
    hh





    // Get references to the #generate element
    var generateBtn = document.querySelector('#generate');

    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');

        passwordText.value = password;
    }

    // Add event listener to generate button
    generateBtn.addEventListener('click', writePassword);


