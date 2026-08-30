// Navigation button
console.log("hello there!");
const nextButton = document.getElementById('next-btn');

if (nextButton) {
  nextButton.onclick = function() {
    document.body.style.opacity = '0';

    setTimeout(function() {
      window.location.href = '../Pages/hall_2.html';
    }, 500);
  };
}


// Scroll reveal
const cards = document.querySelectorAll('.info-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }

    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach(card => {
  observer.observe(card);
});