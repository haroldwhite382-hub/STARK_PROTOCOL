
document.getElementById('e').onclick = function() {
  document.body.style.opacity = '0';
  setTimeout(function() {
    window.location.href = '../Pages/hall_1.html';
  }, 500);
};