let cachedWords = [];

async function preloadWords() {
    try {
        const response = await fetch(`https://api.datamuse.com/words?sp=*`);
        cachedWords = (await response.json()).map(wordObj => wordObj.word);
    } catch (error) {
        console.error("Error preloading words:", error);
    }
}

async function generateRandomWords(count) {
    if (cachedWords.length === 0) await preloadWords(); // Ensure words are loaded
    const words = Array.from({ length: count }, () => 
        cachedWords[Math.floor(Math.random() * cachedWords.length)]
    );

    const isCommaSeparated = document.getElementById('comma-separated').checked;
    document.getElementById('output-field').value = isCommaSeparated ? words.join(', ') : words.join(' ');
}

// Preload words when the page loads
preloadWords();
