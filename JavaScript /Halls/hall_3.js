alert("hall_3.js loaded");
let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.2});

document.querySelectorAll('.suit-panel').forEach(function(panel) {
    observer.observe(panel);
});