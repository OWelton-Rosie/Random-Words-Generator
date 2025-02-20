// Generate random words using the words array from words.js
function generateRandomWords(count) {
    const randomWords = [];

    // Generate the random words
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.push(words[randomIndex]);
    }

    // Check if the "comma-separated" checkbox is checked
    const isCommaSeparated = document.getElementById('comma-separated').checked;

    // Display the generated words with either commas or spaces
    if (isCommaSeparated) {
        document.getElementById('output-field').value = randomWords.join(', '); // Comma-separated
    } else {
        document.getElementById('output-field').value = randomWords.join(' '); // Space-separated
    }
}
