function validateNumber(number) {
    "use strict";
    // Check if the number is negative.
    if (number < 0) {
    // Throw an error.
    throw new Error("The number must be non-negative.");
    }
    }
    // Handle the error.
    try {
    validateNumber(-1);
    } catch (error) {
    // Display the error message.
    document.write(error.message);
    }