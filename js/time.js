const startDate = new Date("2025-12-28T00:00:00");

function updateTimeTogether() {
  const now = new Date();
  let diff = now - startDate;
  if (diff < 0) diff = 0;

  document.getElementById("days").textContent =
    Math.floor(diff / 86400000);
  document.getElementById("hours").textContent =
    Math.floor((diff / 3600000) % 24);
  document.getElementById("minutes").textContent =
    Math.floor((diff / 60000) % 60);
  document.getElementById("seconds").textContent =
    Math.floor((diff / 1000) % 60);
}

updateTimeTogether();
setInterval(updateTimeTogether, 1000);
