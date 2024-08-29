const colorPicker = document.getElementById('colorPicker');
const hexInput = document.getElementById('hexInput');
const previewBox = document.querySelector('.preview-box'); 
const resetBtn = document.querySelector('.reset-btn');
const errorMessage = document.getElementById('error');

// Define the default color
const defaultColor = '#ffffff';

// Function to validate hexadecimal color code
function isValidHex(hex) {
    let regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(hex);
}

// Function to update the preview box color, color picker, and hex input field
function updateColor(newColor) {
    previewBox.style.backgroundColor = newColor;
    colorPicker.value = newColor;
    hexInput.value = newColor.toUpperCase();
}

// Event listener for color picker
colorPicker.addEventListener('input', function() {
    const selectedColor = this.value;
    updateColor(selectedColor);
    errorMessage.style.visibility = 'hidden'; 
});

// Event listener for hex code input
hexInput.addEventListener('input', function() {
    // Ensure the input always starts with a hashtag
    let hexColor = this.value;
    if (!hexColor.startsWith('#')) {
        hexColor = '#' + hexColor;
    }
    if (isValidHex(hexColor)) {
        updateColor(hexColor);
        errorMessage.style.visibility = 'hidden'; 
    } else {
        errorMessage.style.visibility = 'visible'; 
    }
});

// Event listener for reset button
resetBtn.addEventListener('click', function() {
    updateColor(defaultColor);
    errorMessage.style.visibility = 'hidden'; 
});

// Set the default color on page load
window.onload = function() {
    updateColor(defaultColor);
    // Set the initial value of the hex input with the hashtag symbol
    hexInput.value = defaultColor;
};
