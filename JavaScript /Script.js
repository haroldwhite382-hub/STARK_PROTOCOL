document.body.style.opacity = '0';

window.onload = function() {

  document.body.style.transition = 'opacity 0.5s ease';
  document.body.style.opacity = '1';

  document.getElementById('enter-btn').onclick = function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
      window.location.href = '/Pages/hall_1.html';
    }, 500);
  };

  let target = document.getElementById('jarvis-text');
  let message = "Welcome to the Stark Exhibit,Agent 2010328";
  let index = 0;
  let interval = setInterval(function() {
    target.innerHTML += message[index];
    index++;
    if (index === message.length) {
      clearInterval(interval);
    }
  }, 80);
  
  if (document.getElementById('arc-reactor')) {
  anime({
    targets: '.reactor-core',
    boxShadow: [
      '0 0 10px #5EDFFF, 0 0 20px #5EDFFF, 0 0 40px rgba(94, 223, 255, 0.5)',
      '0 0 20px #5EDFFF, 0 0 40px #5EDFFF, 0 0 80px rgba(94, 223, 255, 0.8)',
      '0 0 10px #5EDFFF, 0 0 20px #5EDFFF, 0 0 40px rgba(94, 223, 255, 0.5)'
    ],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true
  });

  anime({
    targets: '.reactor-ring.outer',
    rotate: 360,
    duration: 8000,
    easing: 'linear',
    loop: true
  });

  anime({
    targets: '.reactor-ring.middle',
    rotate: -360,
    duration: 5000,
    easing: 'linear',
    loop: true
  });
}

};