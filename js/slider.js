const sliderImages = [
  "img/gallery/bg2.jpg",
  "img/gallery/img6.jpg",
  "img/gallery/bg4.jpg",
];

const slider = document.getElementById("headerSlider");
let sliderIndex = 0;

const fadeDuration = 1500; // thời gian fade
const intervalTime = fadeDuration * 2;

function changeSlide() {
  // fade out
  slider.classList.add("opacity-0");

  setTimeout(() => {
    // đổi ảnh
    sliderIndex = (sliderIndex + 1) % sliderImages.length;
    slider.src = sliderImages[sliderIndex];

    // fade in
    slider.classList.remove("opacity-0");
  }, fadeDuration);
}

setInterval(changeSlide, intervalTime);
