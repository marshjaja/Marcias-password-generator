// Array of special characters to be included in password
var specialCharacters = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
	let getLength = parseInt(prompt("Please select a number between 8 and 128"));
	if (isNaN(getLength) || getLength < 8 || getLength > 128) {
		alert("Please enter a valid number between 8 and 128");
		return null;
	}
	let isLowerCase = confirm("Would you like to include lower case characters");
	let isUpperCase = confirm("Would you like to include upper case characters");
	let isNumber = confirm("Would you like to include numbers");
	let isSpecialCharacter = confirm(
		"Would you like to include special characters"
	);

	if (!isLowerCase && !isUpperCase && !isNumber && !isSpecialCharacter) {
		alert("Please choose at least one character type");
		return null;
	}

	let userOptions = {
		getLength: getLength,
		isLowerCase: isLowerCase,
		isUpperCase: isUpperCase,
		isNumber: isNumber,
		isSpecialCharacter: isSpecialCharacter,
	};
	return userOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
