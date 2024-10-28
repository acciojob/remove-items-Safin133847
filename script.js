//your JS code here. If required.
const removeButton = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

const removeSelectedColor = () => {
    const selectedIndex = colorSelect.selectedIndex;
    
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
};

// Add event listener to the button
removeButton.addEventListener('click', removeSelectedColor);