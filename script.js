// ==========================
// Dark/Light Mode Toggle
// ==========================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==========================
// Part 2: JS Functions - Random Number Generator
// ==========================

/**
 * Generate a random number between min and max
 * Demonstrates parameters and return values
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomBtn = document.getElementById("randomBtn");
const randomOutput = document.getElementById("randomOutput");

randomBtn.addEventListener("click", () => {
  // Local variable scope inside function
  let number = getRandomNumber(1, 100);
  randomOutput.textContent = `Random Number: ${number}`;
});

// ==========================
// Part 3: Trigger Box Animation
// ==========================
const moveBtn = document.getElementById("moveBtn");
const box = document.getElementById("animateBox");

moveBtn.addEventListener("click", () => {
  box.classList.toggle("move");
});

// ==========================
// Part 3: Card Flip Animation
// ==========================
const flipCard = document.getElementById("flipCard");

flipCard.addEventListener("click", () => {
  flipCard.classList.toggle("flip");
});
