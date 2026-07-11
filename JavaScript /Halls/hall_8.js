window.onload = function() {

  // Reusable typewriter function
  function typeWriter(elementId, text, speed, callback) {
    let target = document.getElementById(elementId);
    target.innerHTML = '';
    let index = 0;
    let interval = setInterval(function() {
      if (text[index] === '\n') {
        target.innerHTML += '<br>';
      } else {
        target.innerHTML += text[index];
      }
      index++;
      if (index === text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }

  // Show element with fade
  function showElement(id, callback) {
    let el = document.getElementById(id);
    el.classList.remove('hidden');
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.8s ease';
    setTimeout(function() {
      el.style.opacity = '1';
      if (callback) setTimeout(callback, 800);
    }, 100);
  }

  // Phase 1 — J.A.R.V.I.S. closing lines
  typeWriter('j-line-1', 'MUSEUM TOUR COMPLETE.', 50, function() {
    setTimeout(function() {
      typeWriter('j-line-2', 'THANK YOU FOR VISITING THE STARK INDUSTRIES ARCHIVE.', 50, function() {
        setTimeout(function() {
          typeWriter('j-line-3', 'ONE FINAL PROTOCOL REMAINS.', 50, function() {
            setTimeout(startHandoff, 1500);
          });
        }, 400);
      });
    }, 400);
  });

  // Phase 2 — System handoff sequence
  function startHandoff() {
    let handoff = document.getElementById('handoff-sequence');
    handoff.classList.remove('hidden');
    handoff.style.opacity = '1';

    let lines = [
      { id: 'h-line-1', text: 'TRANSFERRING CONTROL...', color: '#5EDFFF' },
      { id: 'h-line-2', text: 'J.A.R.V.I.S. OFFLINE.', color: '#5EDFFF' },
      { id: 'h-line-3', text: 'INITIALIZING E.D.I.T.H...', color: '#D4AF37' },
      { id: 'h-line-4', text: 'E.D.I.T.H. ONLINE.', color: '#D4AF37' }
    ];

    let delay = 0;
    lines.forEach(function(line) {
      setTimeout(function() {
        let el = document.getElementById(line.id);
        el.style.color = line.color;
        typeWriter(line.id, line.text, 50, null);
      }, delay);
      delay += 1200;
    });

    setTimeout(startEdith, delay + 800);
  }

  // Phase 3 — E.D.I.T.H. message
  function startEdith() {
    showElement('edith-message', function() {
      let edithText = `Tony Stark's final creation was not a weapon.\n\nIt was not a satellite network.\n\nIt was an act of trust.\n\nE.D.I.T.H. was never about the technology. It was about choosing someone — despite imperfection, despite uncertainty — and saying: I believe in you.\n\nTrust cannot be engineered. It cannot be upgraded or reverse-engineered. It can only be given.\n\nThis archive exists because someone made that same choice.\n\nNot because it was easy.\n\nBecause you were worth it.`;
      typeWriter('edith-text', edithText, 35, function() {
        setTimeout(startPersonal, 1500);
      });
    });
  }

  // Phase 4 — Personal message from Harold
  function startPersonal() {
    showElement('personal-message', function() {
      let personalText = `Cristo.\n\nYou have been a good friend. Quietly, consistently, without making a big deal of it. You showed up. You trusted me with things that mattered. You made ordinary school days worth remembering.\n\nI noticed.\n\nHappy Birthday.\n\n— Harold`;
      typeWriter('personal-text', personalText, 45, function() {
        setTimeout(function() {
          showElement('power-down', null);
        }, 1000);
      });
    });
  }

  // Phase 5 — Power down sequence
  document.getElementById('power-btn').onclick = function() {
    let finalScreen = document.getElementById('final-screen');
    finalScreen.classList.remove('hidden');
    setTimeout(function() {
      finalScreen.style.opacity = '1';
      setTimeout(function() {
        document.getElementById('final-message').style.opacity = '1';
      }, 1500);
    }, 100);
  };

};