window.onload = function() {

  // Guard flag — prevents typeNote firing more than once
  let noteTyped = false;

  // Hide navigation button initially
  let nav = document.getElementById('hall-nav');
  nav.style.opacity = '0';
  nav.style.pointerEvents = 'none';

  // Intersection Observer for all dossier fields
  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // If this is the ARCHIVIST NOTES field, start typewriter
        let label = entry.target.querySelector('.field-label');
        if (label && label.textContent.trim() === 'ARCHIVIST NOTES' && !noteTyped) {
          noteTyped = true;
          setTimeout(typeNote, 400);
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.dossier-field').forEach(function(card) {
    observer.observe(card);
  });

  // Next button navigation
  document.getElementById('next-btn').onclick = function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
      window.location.href = '/Pages/hall_8.html';
    }, 500);
  };

  // Typewriter function for archivist note
  function typeNote() {
    let note = document.getElementById('note-text');
    note.innerHTML = '';
    let text = `Some records are not built from documents.\n\nThis one was built from ordinary school days, random phone calls, Instagram chats, and conversations that somehow turned into philosophy without either of us planning it.\n\nCristo Sony Joseph is in this archive not because of what he has achieved, but because of who he consistently chooses to be. He trusted early. He spoke honestly. He showed up when it mattered.\n\nThat is not a small thing.\n\nThis archive was built over several months by someone who paid attention. Someone who noticed the kind of person you are — not just on the good days, but on the ordinary ones too.\n\nYou are seventeen years old today.\n\nHappy Birthday, Cristo.\n\nThis was always for you.`;
    let index = 0;

    let interval = setInterval(function() {
      if (text[index] === '\n') {
        note.innerHTML += '<br>';
      } else {
        note.innerHTML += text[index];
      }
      index++;
      if (index === text.length) {
        clearInterval(interval);
        // Reveal navigation button after typing finishes
        let nav = document.getElementById('hall-nav');
        nav.style.opacity = '1';
        nav.style.pointerEvents = 'auto';
      }
    }, 35);
  }

};