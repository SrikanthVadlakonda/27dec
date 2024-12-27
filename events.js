function changeColor() {
    // Get the selected color from the dropdown
    const colorSelector = document.getElementById('colorSelector');
    const selectedColor = colorSelector.value;

    // Get the box element
    const colorBox = document.getElementById('colorBox');

    if (selectedColor) {
        // Change the background color of the box
        colorBox.style.backgroundColor = selectedColor;
    } else {
        alert('Please select a color first!');
    }
}
