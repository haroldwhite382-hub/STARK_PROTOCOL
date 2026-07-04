window.onload = function() {

  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.value-card').forEach(function(card) {
    observer.observe(card);
  });

  document.getElementById('next-btn').onclick = function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
      window.location.href = '/Pages/hall_5.html';
    }, 500);
  };

};