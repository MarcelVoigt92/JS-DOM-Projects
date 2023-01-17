let audio = document.getElementById("audio");
let playPauseButton = document.getElementById("play-pause");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let playPauseIcon = playPauseButton.querySelector("i");
let cover = document.getElementById("cover");
let artist = document.getElementById("artist");
let trackName = document.getElementById("track-name");
let progressBar = document.getElementById("progress-bar");
let volumeAdjustment = document.getElementById("volume-adjustment");

playPauseButton.addEventListener("click", togglePlayPause);
previousButton.addEventListener("click", playPreviousTrack);
nextButton.addEventListener("click", playNextTrack);
audio.addEventListener("timeupdate", updateProgress);
volumeAdjustment.addEventListener("input", updateVolume);
progressBar.addEventListener("click", seek);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
}

function playPreviousTrack() {
  // Code to play the previous track
}

function playNextTrack() {
  // Code to play the next track
}

function updateTrackInfo() {
  cover.style.backgroundImage = "url(" + currentTrack.cover + ")";
  artist.innerHTML = currentTrack.artist;
  trackName.innerHTML = currentTrack.name;
}

function updateProgress() {
  var progress = audio.currentTime / audio.duration;
  progressBar.style.width = progress * 100 + "%";
}

function seek(event) {
  var percent = event.offsetX / this.offsetWidth;
  audio.currentTime = percent * audio.duration;
  progressBar.style.width = percent * 100 + "%";
}

function updateVolume() {
  audio.volume = this.value;
}
