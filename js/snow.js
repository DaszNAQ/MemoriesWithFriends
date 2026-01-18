const snowContainer = document.querySelector(".snow-container");

/* ĐƯA TUYẾT RA PHÍA SAU */
snowContainer.style.position = "fixed";
snowContainer.style.top = "0";
snowContainer.style.left = "0";
snowContainer.style.width = "100%";
snowContainer.style.height = "100%";
snowContainer.style.pointerEvents = "none";
snowContainer.style.zIndex = "0"; // Đảm bảo tuyết ở phía sau các phần tử khác

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 10 + 8 + "px";
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";

  snowContainer.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}

setInterval(createSnowflake, 200);
