window.onload = function() {
  let target = document.getElementById('jarvis-text');
  let message = "Welcome to the Stark Exhibit, Agent 2010328.";
  let index = 0;

  let interval = setInterval(function() {
    target.innerHTML += message[index];
    index++;

    if (index === message.length) {
      clearInterval(interval);
    }
  }, 80);
};