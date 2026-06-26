
document.getElementById('next-btn').onclick = function() {
  document.body.style.opacity = '0';
  setTimeout(function() {
    window.location.href = '../Pages/hall_2.html';
  }, 500);
};