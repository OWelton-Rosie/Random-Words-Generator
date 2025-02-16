// Clipboard Copy functionality
function copyToClipboard() {
    const outputField = document.getElementById('output-field');
    
    // Check if there is any text in the output field
    if (outputField && outputField.value.trim() !== "") {
        // Select the text inside the output field
        outputField.select();
        outputField.setSelectionRange(0, 99999); // For mobile devices, this ensures the text is selected

        // Attempt to copy the selected text to clipboard
        try {
            document.execCommand('copy');  // Copies the selected text to clipboard
            alert("Copied to clipboard!");
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    } else {
        alert("Nothing to copy!");
    }
}
