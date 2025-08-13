// Mobile menu: toggle simple overlay (show/hide nav on small screens)
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menuBtn?.addEventListener('click', () => {
  const open = nav.style.display === 'block';
  nav.style.display = open ? 'none' : 'block';
});

// Smoothly update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll (native CSS works, but ensure behavior on older browsers)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
