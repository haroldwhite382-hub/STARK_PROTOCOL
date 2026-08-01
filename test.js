document.getElementById("e").onclick = function() {
  document.getElementById("ironman").style.animation = "exitIronman 1s forwards";
  document.getElementById("title").style.animation = "fadeOut 0.5s forwards";

  setTimeout(function() {
    window.location.href = "../Pages/hall_1.html";
  }, 1000);
};