// Get input elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

// Celsius to Fahrenheit conversion function
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius conversion function
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function to update the conversion as user types
function updateConversion() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitConverted = celsiusToFahrenheit(celsiusValue);
        fahrenheitInput.value = fahrenheitConverted.toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        const celsiusConverted = fahrenheitToCelsius(fahrenheitValue);
        celsiusInput.value = celsiusConverted.toFixed(2);
    } else {
        // If both inputs are empty or invalid, do nothing
        return;
    }
}

// Event listeners to update conversion on input change
celsiusInput.addEventListener('input', updateConversion);
fahrenheitInput.addEventListener('input', updateConversion);
