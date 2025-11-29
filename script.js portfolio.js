// Basic interactivity: nav toggle, smooth scroll, contact form client validation, current year
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a.nav-link, .btn[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav after click
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Contact form (client-only, no backend). Replace with real endpoint when available.
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      msg.textContent = 'Please fill all fields.';
      msg.style.color = '#b91c1c';
      return;
    }

    // Basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msg.textContent = 'Please enter a valid email.';
      msg.style.color = '#b91c1c';
      return;
    }

    // Simulate success (client-side only)
    msg.textContent = 'Message sent! I will reply soon.';
    msg.style.color = 'var(--accent-2)';
    form.reset();

    // If you add a backend, send data using fetch() here.
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});
