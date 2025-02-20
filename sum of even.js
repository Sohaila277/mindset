function sumEvenNumbers(numbers) {
    return numbers
        .filter(num => num % 2 === 0) // Filter even numbers
        .reduce((sum, num) => sum + num, 0); // Sum them up
}

// take array from user
const input = prompt("Enter numbers separated by commas (e.g., 1,2,3,4,5,6):");

// Convert input string into an array of numbers
const numbersArray = input.split(",").map(num => Number(num.trim()));

// Check if input is valid
if (numbersArray.some(isNaN)) {
    console.log("Invalid input. Please enter only numbers.");
} else {
    // Calculate and display the sum of even numbers
    const result = sumEvenNumbers(numbersArray);
    console.log("Sum of even numbers:", result);
}
