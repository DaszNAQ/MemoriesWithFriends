// fetch("data/stories.json")
//   .then(res => res.json())
//   .then(stories => {
//     const wrapper = document.querySelector(".stories-wrapper");

//     stories.forEach((story, i) => {
//       const card = document.createElement("div");
//       card.className = "story-card";
//       if (i % 2 !== 0) card.classList.add("reverse");

//       card.innerHTML = `
//         <div class="story-image">
//           <img src="${story.image}">
//         </div>
//         <div class="story-content">
//           <h3>${story.name}</h3>
//           <p>${story.content}</p>
//         </div>
//       `;

//       wrapper.appendChild(card);
//     });
//   });
