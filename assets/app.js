const containerDiv = document.querySelector(".container");
const roundEl = document.querySelector(".round");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".ri-sun-fill");

roundEl.addEventListener("click", () => {
  containerDiv.classList.toggle("color");
  roundEl.classList.toggle("round-left");
  moonIcon.classList.toggle("moonStyle");
  sunIcon.classList.toggle("sunStyle");
  mp3.toggle("autoplay");
});