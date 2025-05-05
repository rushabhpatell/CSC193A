// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Bigger button functionality
    document.getElementById("biggerBtn").onclick = function() {
        alert("Hello, world!");
        document.getElementById("textInput").style.fontSize = "24pt";
    };

    // Radio buttons functionality
    document.getElementById("fancy").onchange = function() {
        if (this.checked) {
            let textArea = document.getElementById("textInput");
            textArea.style.fontWeight = "bold";
            textArea.style.color = "blue";
            textArea.style.textDecoration = "underline";
        }
    };

    document.getElementById("boring").onchange = function() {
        if (this.checked) {
            let textArea = document.getElementById("textInput");
            textArea.style.fontWeight = "normal";
            textArea.style.color = "";
            textArea.style.textDecoration = "";
        }
    };

    // Moo button functionality
    document.getElementById("mooBtn").onclick = function() {
        let textArea = document.getElementById("textInput");
        let text = textArea.value;
        
        // Uppercase all text
        text = text.toUpperCase();
        
        // Add "-Moo" to the end of each sentence
        let sentences = text.split(".");
        for (let i = 0; i < sentences.length - 1; i++) {
            if (sentences[i].trim().length > 0) {
                let words = sentences[i].trim().split(" ");
                if (words.length > 0) {
                    words[words.length - 1] += "-Moo";
                }
                sentences[i] = words.join(" ");
            }
        }
        text = sentences.join(".");
        
        textArea.value = text;
    };
});