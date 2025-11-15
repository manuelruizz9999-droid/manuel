const heart = document.getElementById("heart");
const message = document.getElementById("message");
const screen = document.querySelector(".full-screen");

const PARTICLES = 40;
const SYMBOLS = ["❤","💖","💗","♥"];

heart.addEventListener("click", () => {
  showMessage();
  explodeHeart();
});

function showMessage(){
  message.classList.add("show");
  setTimeout(()=> message.classList.remove("show"), 2500);
}

function explodeHeart(){
  const rect = heart.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for(let i=0; i< PARTICLES; i++){
    const p = document.createElement("div");
    p.classList.add("particle");
    p.textContent = SYMBOLS[i % SYMBOLS.length];

    p.style.left = `${centerX}px`;
    p.style.top = `${centerY}px`;

    screen.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const distance = 160 + Math.random() * 200;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    p.animate([
      { transform:`translate(0,0) scale(1)`, opacity:1 },
      { transform:`translate(${x}px, ${y}px) scale(0.4)`, opacity:0 }
    ],{
      duration:900 + Math.random()*600,
      easing:"cubic-bezier(.25,.8,.25,1)",
      fill:"forwards"
    });

    setTimeout(()=> p.remove(), 1600);
  }
}
