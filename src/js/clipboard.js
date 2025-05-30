document.getElementById('copy-button').addEventListener('click', function () {
    copyToClipboard(this);
});

function copyToClipboard(buttonElement) {
    const outputField = document.getElementById('output-field');

    if (outputField && outputField.value.trim() !== "") {
        outputField.select();
        outputField.setSelectionRange(0, 99999); // For mobile

        try {
            document.execCommand('copy');
            // Feedback to user
            const originalText = buttonElement.textContent;
            buttonElement.textContent = "Copied to clipboard!";
            buttonElement.disabled = true;

            setTimeout(() => {
                buttonElement.textContent = originalText;
                buttonElement.disabled = false;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    } else {
        // Empty field feedback
        const originalText = buttonElement.textContent;
        buttonElement.textContent = "Nothing to copy!";
        buttonElement.disabled = true;

        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.disabled = false;
        }, 2000);
    }
}
