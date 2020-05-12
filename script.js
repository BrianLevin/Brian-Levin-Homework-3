
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
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
        'Click OK to confirm including special characters.'
    );

    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
        'Click OK to confirm including numeric characters.'
    );

    // Variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCasedCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
    );

    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
    );







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


