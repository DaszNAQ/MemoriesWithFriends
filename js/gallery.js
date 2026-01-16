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
  // { src: "img/gallery/img14.jpg", type: "horizontal" },
];

const grid = document.getElementById("masonryGrid");

photos.forEach(photo => {
  const item = document.createElement("div");
  item.className = "masonry-item";
  if (photo.type === "horizontal") item.classList.add("wide");

  const card = document.createElement("div");
  card.className = "memory-card";

  const img = document.createElement("img");
  img.src = photo.src;
  img.loading = "lazy";

  card.appendChild(img);
  item.appendChild(card);
  grid.appendChild(item);
});
