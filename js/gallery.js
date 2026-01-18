const photos = [
  { src: "img/gallery/bg2.jpg", type: "horizontal" },
  { src: "img/gallery/bg3.jpg", type: "horizontal" },
  { src: "img/gallery/img1.jpg", type: "vertical" },
  { src: "img/gallery/img2.jpg", type: "horizontal" },
  { src: "img/gallery/img3.jpg", type: "vertical" },
  { src: "img/gallery/img4.jpg", type: "horizontal" },
  { src: "img/gallery/img5.jpg", type: "horizontal" },
  { src: "img/gallery/img6.jpg", type: "vertical" },
  { src: "img/gallery/img7.jpg", type: "vertical" },
  { src: "img/gallery/img8.jpg", type: "vertical" },
  { src: "img/gallery/img9.jpg", type: "vertical" },
  { src: "img/gallery/img10.jpg", type: "vertical" },
  { src: "img/gallery/img11.jpg", type: "vertical" },
  { src: "img/gallery/img12.jpg", type: "vertical" },
  { src: "img/gallery/bg1.jpg", type: "horizontal" },
  { src: "img/gallery/img13.jpg", type: "horizontal" },
];

const grid = document.getElementById("masonryGrid");

// ===== Fullscreen elements =====
const fullscreen = document.getElementById("fullscreen");
const fullImage = document.getElementById("fullImage");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// ===== Render gallery =====
photos.forEach((photo, index) => {
  const item = document.createElement("div");
  item.className = "masonry-item";

  const card = document.createElement("div");
  card.className = "memory-card";

  const img = document.createElement("img");
  img.src = photo.src;
  img.loading = "lazy";

  card.appendChild(img);
  item.appendChild(card);
  grid.appendChild(item);

  card.addEventListener("click", () => {
    currentIndex = index;
    openFullscreen();
  });
});

// ===== Fullscreen logic =====
function openFullscreen() {
  fullscreen.classList.add("active");
  document.body.style.overflow = "hidden";
  updateFullscreenImage();
}

function closeFullscreen() {
  fullscreen.classList.remove("active");
  document.body.style.overflow = "";
}

function updateFullscreenImage() {
  fullImage.src = photos[currentIndex].src;

  prevBtn.classList.toggle("disabled", currentIndex === 0);
  nextBtn.classList.toggle(
    "disabled",
    currentIndex === photos.length - 1
  );
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateFullscreenImage();
  }
}

function nextImage() {
  if (currentIndex < photos.length - 1) {
    currentIndex++;
    updateFullscreenImage();
  }
}

// ===== Button events =====
closeBtn.addEventListener("click", closeFullscreen);
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

// Click outside image to close
fullscreen.addEventListener("click", (e) => {
  if (e.target === fullscreen) closeFullscreen();
});

// ===== Keyboard support =====
document.addEventListener("keydown", (e) => {
  if (!fullscreen.classList.contains("active")) return;

  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "Escape") closeFullscreen();
});

// ======================
// Swipe support (mobile)
// ======================
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50;

fullscreen.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

fullscreen.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;
  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

  if (deltaX > 0) {
    prevImage();
  } else {
    nextImage();
  }
}
