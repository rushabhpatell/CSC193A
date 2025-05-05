(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  function handleClick() {
    console.log("Button clicked!");
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText;
  }

  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] === 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();