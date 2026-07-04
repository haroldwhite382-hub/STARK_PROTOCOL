window.onload = function() {

  function typeWriter(elementId, text, speed, callback) {
    let target = document.getElementById(elementId);
    let index = 0;
    let interval = setInterval(function() {
      target.innerHTML += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }

  function showMatch() {
    setTimeout(function() {
      let matchDiv = document.getElementById('match-found');
      matchDiv.classList.remove('hidden');
      matchDiv.style.opacity = '0';
      matchDiv.style.transition = 'opacity 0.8s ease';
      setTimeout(function() {
        matchDiv.style.opacity = '1';
        setTimeout(showReveal, 2000);
      }, 100);
    }, 800);
  }

  function showReveal() {
    let revealDiv = document.getElementById('subject-reveal');
    revealDiv.classList.remove('hidden');
    revealDiv.style.opacity = '0';
    revealDiv.style.transition = 'opacity 1s ease';
    setTimeout(function() {
      revealDiv.style.opacity = '1';
      setTimeout(showButton, 1500);
    }, 100);
  }

  function showButton() {
    let navDiv = document.getElementById('hall-nav');
    navDiv.classList.remove('hidden');
    navDiv.style.opacity = '0';
    navDiv.style.transition = 'opacity 0.8s ease';
    setTimeout(function() {
      navDiv.style.opacity = '1';
    }, 100);

    document.getElementById('next-btn').onclick = function() {
      document.body.style.opacity = '0';
      setTimeout(function() {
        window.location.href = '/Pages/hall_7.html';
      }, 500);
    };
  }

  typeWriter('line-1', 'ANALYZING LEGACY DATA...', 50, function() {
    setTimeout(function() {
      typeWriter('line-2', 'CROSS-REFERENCING SUBJECT FILES...', 50, function() {
        setTimeout(function() {
          typeWriter('line-3', 'IDENTIFYING SUCCESSOR CANDIDATE...', 50, function() {
            setTimeout(function() {
              typeWriter('line-4', 'RUNNING FINAL ANALYSIS...', 50, showMatch);
            }, 400);
          });
        }, 400);
      });
    }, 400);
  });

};