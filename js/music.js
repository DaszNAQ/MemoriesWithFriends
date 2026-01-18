const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const videos = document.querySelectorAll("video");

let isMusicOn = localStorage.getItem("memories_music") !== "on";

/* ===== MUSIC STATE ===== */
function updateMusicState() {
  if (isMusicOn) {
    bgMusic.play().catch(() => {});
    musicBtn.textContent = "♪";
    musicBtn.classList.remove("opacity-50");
  } else {
    bgMusic.pause();
    musicBtn.textContent = "♫";
    musicBtn.classList.add("opacity-50");
  }
  localStorage.setItem("memories_music", isMusicOn ? "off" : "on");
}

/* ===== TOGGLE BUTTON ===== */
musicBtn.addEventListener("click", () => {
  isMusicOn = !isMusicOn;
  updateMusicState();
});

/* ===== VIDEO CONTROL MUSIC ===== */
videos.forEach((video) => {
  video.addEventListener("play", () => {
    if (!bgMusic.paused) {
      bgMusic.pause();
    }
    isMusicOn = false;
    updateMusicState();
  });
});

/* ===== INIT ===== */
updateMusicState();
