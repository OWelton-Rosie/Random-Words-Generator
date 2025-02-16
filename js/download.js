            // Function to download the output in the selected format
            function downloadOutput() {
                var outputText = document.getElementById('output-field').value;
                var format = document.getElementById('file-format').value;
                
                if (outputText === "") {
                    alert("Nothing to download!");
                    return;
                }

                var blob;
                var fileName = "random_words";
                
                switch (format) {
                    case "txt":
                        blob = new Blob([outputText], { type: 'text/plain' });
                        fileName += ".txt";
                        break;
                    case "csv":
                        var csvContent = outputText.replace(/ /g, ',');
                        blob = new Blob([csvContent], { type: 'text/csv' });
                        fileName += ".csv";
                        break;
                    case "json":
                        var jsonContent = JSON.stringify({ words: outputText.split(" ") });
                        blob = new Blob([jsonContent], { type: 'application/json' });
                        fileName += ".json";
                        break;
                    default:
                        alert("Unknown format selected.");
                        return;
                }

                var link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = fileName;
                link.click();
            }