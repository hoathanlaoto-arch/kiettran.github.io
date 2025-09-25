function chao() {
  alert("Tôi là Trần Gia Kiệt - Vua DEV 9N1 😎🚀");
}

// Animation khi scroll vào phần tử
const cards = document.querySelectorAll(".card");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
