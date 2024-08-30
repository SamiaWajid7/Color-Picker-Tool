const colorPicker = document.getElementById('colorPicker');
const hexInput = document.getElementById('hexInput');
const previewBox = document.querySelector('.preview-box');
const resetBtn = document.querySelector('.reset-btn');
const errorMessage = document.getElementById('error');

// Define the default color
const defaultColor = '#FFFFFF';

// Function to validate 6-character hexadecimal color code
function isValidHex(hex) {
    let regex = /^#([A-Fa-f0-9]{6})$/;
    return regex.test(hex);
}

// Function to update the preview box color and color picker
function updateColor(newColor) {
    if (isValidHex(newColor)) {
        previewBox.style.backgroundColor = newColor;
        colorPicker.value = newColor;
        hexInput.value = newColor.toUpperCase();
        errorMessage.style.visibility = 'hidden';
    } else {
        errorMessage.style.visibility = 'visible';
    }
}

// Event listener for color picker
colorPicker.addEventListener('input', function() {
    const selectedColor = this.value;
    // Check if the color picker value is a valid 6-character hex
    if (isValidHex(selectedColor)) {
        updateColor(selectedColor);
    } else {
        errorMessage.style.visibility = 'visible';
    }
});

// Event listener for hex code input
hexInput.addEventListener('input', function() {
    let hexColor = this.value;
    if (!hexColor.startsWith('#')) {
        hexColor = '#' + hexColor;
    }
    // Only update if the hex code is exactly 7 characters long (including #)
    if (hexColor.length === 7 && isValidHex(hexColor)) {
        updateColor(hexColor);
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
    hexInput.value = defaultColor;
};
