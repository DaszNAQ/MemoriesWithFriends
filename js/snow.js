const snowContainer = document.querySelector(".snow-container");

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
