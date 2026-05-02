// CUSTOM CURSOR
document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.getElementById('cursor');
  const cursorBlur = document.getElementById('cursor-blur');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorBlur.style.left = e.clientX - 20 + 'px';
    cursorBlur.style.top = e.clientY - 20 + 'px';
  });
  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    cursorBlur.style.display = 'none';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
    cursorBlur.style.display = 'block';
  });
  // Hover effect for links and buttons
  document.querySelectorAll('a, button, .stack-item, .glass-card, .project-card, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.background = '#7c3aed';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = '#00bcd4';
    });
  });
});

// GSAP ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-title', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.2,
  ease: 'power3.out'
});

gsap.from('.hero-actions', {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.4,
  ease: 'power3.out'
});

gsap.from('.hero-badge', {
  duration: 1,
  y: 20,
  opacity: 0,
  delay: 0.1,
  ease: 'power3.out'
});

// Scroll animations for sections
gsap.utils.toArray('.section-header').forEach(header => {
  gsap.from(header, {
    scrollTrigger: {
      trigger: header,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
});

gsap.utils.toArray('.glass-card, .stack-item, .project-card, .timeline-item, .service-card').forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form submit (prevent default for demo)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! (Simulação)');
});