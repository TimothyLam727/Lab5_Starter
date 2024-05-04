// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti(); // Initialize the confetti library
  const hornSelect = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const hornData = {
    'air-horn': {
        img: 'assets/images/air-horn.svg',
        sound: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
        img: 'assets/images/car-horn.svg',
        sound: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
        img: 'assets/images/party-horn.svg',
        sound: 'assets/audio/party-horn.mp3'
    }
  };

  // Update horn image and sound source
  hornSelect.addEventListener('change', function() {
    let hornType = hornSelect.value;
    document.querySelector('img[alt="No image selected"]').src = hornData[hornType].img;
    audio.src = hornData[hornType].sound;
    //console.log("Horn selected: " + hornType + ", Audio source set to: " + hornData[hornType].sound);

  });

  volumeSlider.addEventListener('input', function() {
    let volumeLevel = volumeSlider.value;
    audio.volume = volumeLevel / 100;

    if (volumeLevel == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
  } else if (volumeLevel < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
  } else if (volumeLevel < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
  } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
  }
  });

  playButton.addEventListener('click', function() {
    //audio.currentTime = 0; // Reset audio to start
    audio.play();
    if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
    }
  });
}