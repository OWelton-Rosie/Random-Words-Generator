// Show or hide the custom input based on selection
document.getElementById('word-count').addEventListener('change', function() {
    const selectedOption = this.value;
    if (selectedOption === 'custom') {
        document.getElementById('custom-input-container').style.display = 'block';
    } else {
        document.getElementById('custom-input-container').style.display = 'none';
    }
});

// Handle the word generation logic
document.getElementById('generate-btn').addEventListener('click', function() {
    let wordCount;
    const selectedOption = document.getElementById('word-count').value;

    if (selectedOption === 'custom') {
        wordCount = document.getElementById('custom-word-count').value;
        if (wordCount < 1) {
            alert("Please enter a valid number greater than 0.");
            return;
        }
    } else {
        wordCount = selectedOption;
    }

    generateRandomWords(wordCount);  // Call the function to generate the words
});
