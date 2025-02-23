function incrementToZeros() {
    let input = prompt("Enter a number:");

    let number = parseInt(input, 10);

    if (isNaN(number) || number <= 0) {
        console.log("Please enter a valid positive integer.");
        
    }

    let numDigits = Math.floor(Math.log10(number));
    let target = (Math.floor(number / Math.pow(10, numDigits)) + 1) * Math.pow(10, numDigits);

    console.log(`Result: ${target}`);
}

incrementToZeros();