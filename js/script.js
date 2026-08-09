// Pequenas animações compartilhadas pelas páginas.

document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openFinal");

  if (!openButton) return;

  openButton.addEventListener("click", () => {
    const before = document.getElementById("before-open");
    const after = document.getElementById("after-open");
    const glow = document.querySelector(".glow");

    before.style.transition = "all .8s ease";
    before.style.opacity = "0";
    before.style.transform = "scale(.85) translateY(-20px)";

    setTimeout(() => {
      before.style.display = "none";
      after.classList.add("active");
      glow.classList.add("active");

      createParticles(110);
      createHearts(28);

      // Um segundo efeito de partículas alguns segundos depois.
      setTimeout(() => createParticles(70), 2500);
    }, 700);
  });
});

function createParticles(amount) {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < amount; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = (Math.random() * -20) + "%";
    particle.style.animationDuration = (3 + Math.random() * 5) + "s";
    particle.style.animationDelay = (Math.random() * 1.5) + "s";
    particle.style.width = particle.style.height = (2 + Math.random() * 5) + "px";

    container.appendChild(particle);

    setTimeout(() => particle.remove(), 9000);
  }
}

function createHearts(amount) {
  const container = document.getElementById("hearts");
  if (!container) return;

  const symbols = ["❤️", "💖", "✨", "💫", "🤍"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";
    heart.style.animationDelay = Math.random() * 3 + "s";
    heart.style.fontSize = (.8 + Math.random() * 1.3) + "rem";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);
  }
}
