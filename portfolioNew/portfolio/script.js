// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('.nav__links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// One orchestrated moment: count up the stats in the hero status panel
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  if (prefersReducedMotion || Number.isNaN(target)) {
    el.textContent = target;
    return;
  }
  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-count]').forEach(countUp);
});
