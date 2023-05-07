// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  let isPartyHorn;

  document.getElementById("horn-select").addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      document.querySelector("img").src = "assets/images/air-horn.svg";
      document.querySelector("audio").src = "assets/audio/air-horn.mp3";
      isPartyHorn = false;
    }
    if (event.target.value == "car-horn") {
      document.querySelector("img").src = "assets/images/car-horn.svg";
      document.querySelector("audio").src = "assets/audio/car-horn.mp3";
      isPartyHorn = false;
    }
    if (event.target.value == "party-horn") {
      document.querySelector("img").src = "assets/images/party-horn.svg";
      document.querySelector("audio").src = "assets/audio/party-horn.mp3";
      isPartyHorn = true;
    }
  });

  document.getElementById("volume-controls").addEventListener("change", (event) => {
      console.log(event.target.value);
      console.log(document.getElementById("volume-controls").querySelector("img"));
      console.log(document.querySelector("audio").volume);

      if (event.target.value == 0) {
        document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-0.svg";
        document.querySelector("audio").volume = event.target.value/100;
        console.log(document.querySelector("audio").volume);
      }
      else if (event.target.value > 0 && event.target.value < 33) {
        document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-1.svg";
        document.querySelector("audio").volume = (event.target.value/100);
        console.log(document.querySelector("audio").volume);
      }
      else if (event.target.value >= 33 && event.target.value < 67) {
        document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-2.svg";
        document.querySelector("audio").volume = (event.target.value/100);
        console.log(document.querySelector("audio").volume);
      }
      else {
        document.getElementById("volume-controls").querySelector("img").src = "assets/icons/volume-level-3.svg";
        document.querySelector("audio").volume = (event.target.value/100);
        console.log(document.querySelector("audio").volume);
      }

  });

  document.querySelector("button").addEventListener("click", (event) => {
    document.querySelector("audio").play();
    if(isPartyHorn) {
      jsConfetti.addConfetti();
    }
  });
}