const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateCreditCardNumber(cardNumber) {
    // Remove any spaces or dashes
    cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');

    // Check if the card number is empty or not a number
    if (cardNumber === '' || isNaN(cardNumber)) {
        return false;
    }

    // Check the length based on the card type
    var cardType = getCardType(cardNumber);
    var cardLengthValid = false;
    switch (cardType) {
        case 'Visa':
            cardLengthValid = (cardNumber.length === 16);
            break;
        case 'Mastercard':
            cardLengthValid = (cardNumber.length === 16);
            break;
        case 'American Express':
            cardLengthValid = (cardNumber.length === 15);
            break;
        case 'Discover':
            cardLengthValid = (cardNumber.length === 16);
            break;
        default:
            cardLengthValid = false;
    }

    if (!cardLengthValid) {
        return false;
    }

    // Use Luhn algorithm to validate the card number
    var sum = 0;
    var doubleUp = false;
    for (var i = cardNumber.length - 1; i >= 0; i--) {
        var curDigit = parseInt(cardNumber.charAt(i));

        if (doubleUp) {
            if ((curDigit *= 2) > 9) curDigit -= 9;
        }

        sum += curDigit;
        doubleUp = !doubleUp;
    }

    return (sum % 10) === 0;
}

function getCardType(cardNumber) {
    if (/^4/.test(cardNumber)) {
        return 'Visa';
    } else if (/^5[1-5]/.test(cardNumber)) {
        return 'Mastercard';
    } else if (/^3[47]/.test(cardNumber)) {
        return 'American Express';
    } else if (/^6(?:011|5[0-9]{2})/.test(cardNumber)) {
        return 'Discover';
    } else {
        return 'Unknown';
    }
}

// Function to interact with the user
function validateCardWithUser() {
    rl.question("Enter your credit card number: ", function(cardNumber) {
        if (validateCreditCardNumber(cardNumber)) {
            console.log("Valid " + getCardType(cardNumber) + " card number.");
        } else {
            console.log("Invalid card number.");
        }
        rl.close();
    });
}

// Call the function to start the interaction
validateCardWithUser();


