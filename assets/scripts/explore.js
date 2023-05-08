// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.querySelector("select").appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  document.querySelector("button").addEventListener("click" , (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(document.querySelector("textarea").value);
    const selectedOption =
    document.querySelector("select").selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    document.querySelector("img").src = "assets/images/smiling-open.png";

    utterThis.addEventListener("end", (event) => {
      document.querySelector("img").src = "assets/images/smiling.png";
    });

  });

}