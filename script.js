// ========== IMAGE POP-UP (Gallery Lightbox) ==========


// ========== SMOOTH SCROLL LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// ========== FADE-IN ON SCROLL ==========
const fadeSections = document.querySelectorAll('.fade-section');

function revealOnScroll() {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== IMPACT COUNTERS ==========
(function(){
  const counters = document.querySelectorAll('.stat-number');
  let started = false;

  function startCounters() {
    const impactSection = document.querySelector('#impact');
    if (!impactSection) return;
    const rect = impactSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight - 120 && !started) {
      started = true;
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const step = Math.ceil(target / 100);

        function animate() {
          current += step;
          if (current > target) current = target;
          counter.textContent = current.toLocaleString();
          if (current < target) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
      });
    }
  }
  window.addEventListener('load', startCounters);
  window.addEventListener('scroll', startCounters);
})();

// ========== BOOTSTRAP MODAL LIGHTBOX SUPPORT ==========
(function(){
  if (typeof $ === 'undefined') return;
  $('#lightboxModal').on('show.bs.modal', function (e) {
    const img = $(e.relatedTarget).data('img');
    $('#lightboxImage').attr('src', img);
  });
})();
