const messages = [
  "You are loved than you know💕", 
  "You make my every day special🌹", 
  "My favourite place is thinking of you💭", 
  "You + Me = Anak kita HAHAH ", 
  "gurauuu You + Me = 🤍", 
  "We'll overcome troubles together, resolve the issues together", 
  "Stay together forever.", 
  "Happy Valentine Babe🌹", 
  "I Love You", 
  "-Kuang"
];

const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const effects = document.getElementById("effects");

// Button click
button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * messages.length);
  message.textContent = messages[random];

  if (music.paused) {
    music.volume = 0.3;
    music.play();
  }
});

// Floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  effects.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 600);