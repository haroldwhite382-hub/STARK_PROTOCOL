
function updateClock() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  let months = ['JAN','FEB','MAR','APR','MAY','JUN',
                 'JUL','AUG','SEP','OCT','NOV','DEC'];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  document.getElementById('clock-time').innerHTML =
    hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock-date').innerHTML =
    date + ' ' + month + ' ' + year;
}

updateClock();
setInterval(updateClock, 1000); 