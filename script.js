const counter = document.querySelector(".counter");
const front = document.querySelector(".front");
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
const particlesContainer = document.querySelector(".particles");

let number = 0;

// Create animated background particles
function createParticles() {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 4 + "s";
    // Initially position the particles at the bottom of the page
    particle.style.transform = "translateY(100vh)";
    particlesContainer.appendChild(particle);
  }
}

// Enhanced easing function for smoother animation
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Random speed variation for more realistic loading
function getRandomDelay() {
  const baseDelay = 20;
  const variation = Math.random() * 10 + 2;
  return Math.floor(baseDelay + variation);
}

function updateNumber() {
  const progress = number / 100;
  const easedProgress = easeOutCubic(progress);

  // Update counter with smooth transition
  counter.textContent = number + "%";

  // Update progress bar
  front.style.width = number + "%";

  // Add scale effect during loading
  counter.style.transform = `scale(${1 + Math.sin(number * 0.1) * 0.05})`;

  number++;

  if (number < 101) {
    setTimeout(updateNumber, getRandomDelay());
  } else {
    // Completion animation
    container.classList.add("completed");
    h1.innerHTML = "Complete!";
  }
}

// Initialize
createParticles();

// Start with a small delay for dramatic effect
setTimeout(updateNumber, 500);
