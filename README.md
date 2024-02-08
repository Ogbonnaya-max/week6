# CREDIT CARD VALIDATOR

This JavaScript program validates credit card numbers using the Luhn algorithm and checks for specific card types such as Visa, Mastercard, American Express, and Discover.

## USAGE

1. Clone or download the repository to your local machine.

2. Navigate to the directory where the files are located.

3. Open a terminal or command prompt.

4. Run the program using Node.js:

     node ValidateCard.js

5. Follow the prompts to enter your credit card number.

6. The program will then validate the entered credit card number and display whether it's valid or invalid, along with the card type.

## FEATURES

- Validates credit card numbers using the Luhn algorithm.
- Determines the card type based on the first digits of the card number.
- Handles input from the user via command line using the `readline` module in Node.js.

**The regular expressions (regex) used in the code are used to match specific patterns in the credit card numbers to determine their types. Here's a brief description of each regex pattern:**

-Visa Card Pattern:
/^4/: This regex pattern matches credit card numbers that start with the digit 4, which is the common starting digit for Visa cards.

-Mastercard Card Pattern:
/^5[1-5]/: This regex pattern matches credit card numbers that start with the digit 5 followed by any digit from 1 to 5, inclusive. This pattern is commonly found in Mastercard card numbers.

-American Express Card Pattern:
/^3[47]/: This regex pattern matches credit card numbers that start with the digit 3 followed by either 4 or 7. American Express card numbers commonly start with these digits.

-Discover Card Pattern:
/^6(?:011|5[0-9]{2})/: This regex pattern matches credit card numbers that start with the digit 6 followed by either 011 or 5 followed by any two digits ([0-9]{2}). This pattern is specific to Discover card numbers.

Each regex pattern is anchored with ^, which signifies the beginning of the string, ensuring that the pattern matches only at the beginning of the credit card number. These patterns are used in the getCardType() function to determine the type of credit card based on the first digits of the card number.

## FILES

- `ValidateCard.js`: The main JavaScript file containing the program logic.
- `README.md`: This README file providing instructions and information about the program.

## REQUIREMENTS

- Node.js installed on your machine.
