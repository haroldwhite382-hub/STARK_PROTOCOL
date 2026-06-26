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
    let interval = setInterval(function() {target.innerHTML += message[index];
        index++;
        if (index === message.length) {clearInterval(interval);
            
        };
    }, 80);
};