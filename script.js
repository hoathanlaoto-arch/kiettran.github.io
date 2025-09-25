// ==== particles init (inline config) ====
// ensure particlesJS is loaded (script tag in index.html CDN)
if (window.particlesJS) {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 55, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#9b8cff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.18, "random": true },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#2bd6ff",
        "opacity": 0.06,
        "width": 1
      },
      "move": { "enable": true, "speed": 1.4, "random": false, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 0.12 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
}

// ==== smooth reveal for project cards on scroll ====
const projectCards = document.querySelectorAll('.project-card');
function revealOnScroll() {
  const trigger = window.innerHeight * 0.82;
  projectCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add('show');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealOnScroll();
  // small delay to stagger animation
  projectCards.forEach((c, i) => setTimeout(() => c.classList.add('show'), i * 120));
});

// ==== copy email ====
function copyEmail() {
  const emailEl = document.getElementById('email');
  const email = emailEl ? emailEl.textContent.trim() : '';
  if (!navigator.clipboard) {
    // fallback
    const ta = document.createElement('textarea'); ta.value = email; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); ta.remove();
    showCopyMsg();
    return;
  }
  navigator.clipboard.writeText(email).then(showCopyMsg);
}
function showCopyMsg(){
  const msg = document.getElementById('copy-msg');
  if (!msg) return;
  msg.textContent = '📋 Đã copy email!';
  setTimeout(()=> msg.textContent = '', 2000);
}

// ==== Optional: smooth scroll polyfill for old browsers - but html {scroll-behavior:smooth} handles modern browsers ====
