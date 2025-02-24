const cachedWords = [];

async function fetchWordsFromAPI(count) {
    try {
        const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${count}`);
        if (!response.ok) throw new Error('Failed to fetch words');
        
        const apiWords = await response.json();
        cachedWords.push(...apiWords); // Store words in cache for future use

        return apiWords;
    } catch (error) {
        console.error('API error:', error);
        return null; // Ensure we handle API failures properly
    }
}

function generateRandomLocalWords(count) {
    return Array.from({ length: count }, () => words[Math.floor(Math.random() * words.length)]);
}

async function generateRandomWords(count) {
    const outputField = document.getElementById('output-field');
    const isCommaSeparated = document.getElementById('comma-separated').checked;

    if (navigator.onLine) {
        const apiWords = await fetchWordsFromAPI(count);
        if (apiWords) {
            outputField.value = isCommaSeparated ? apiWords.join(', ') : apiWords.join(' ');
            return;
        }
    }

    // Use local wordlist if offline or API fails
    const localWords = generateRandomLocalWords(count);
    outputField.value = isCommaSeparated ? localWords.join(', ') : localWords.join(' ');
}
