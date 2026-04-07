/* =========================================
   etnet AI — JavaScript
   ========================================= */

(function () {
  'use strict';

  /* ---- Mobile Navigation ---- */
  const hamburger = document.getElementById('hamburger');
  const body      = document.body;

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = body.classList.toggle('mobile-nav-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when any nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        body.classList.remove('mobile-nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (body.classList.contains('mobile-nav-open') &&
        !e.target.closest('.nav-inner')) {
      body.classList.remove('mobile-nav-open');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ---- Pricing toggle (monthly/annual) ---- */
  const toggle = document.getElementById('billing-toggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      const annual = toggle.checked;
      document.querySelectorAll('.price-monthly').forEach(el => {
        el.style.display = annual ? 'none' : 'flex';
      });
      document.querySelectorAll('.price-annual').forEach(el => {
        el.style.display = annual ? 'flex' : 'none';
      });
    });
  }

  /* ---- Scroll Reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---- Contact form: basic client validation ---- */
  const form = document.getElementById('demo-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name    = form.querySelector('#f-name');
      const email   = form.querySelector('#f-email');
      const company = form.querySelector('#f-company');
      let valid = true;

      [name, email, company].forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#ef4444';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.style.borderColor = '#ef4444';
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
        const first = form.querySelector('input[style*="ef4444"]');
        if (first) first.focus();
      }
    });

    // Live validation reset
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  }

  /* ---- Animate chart bars on intersection ---- */
  const bars = document.querySelectorAll('.chart-bar');
  if ('IntersectionObserver' in window && bars.length) {
    const barObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bars.forEach((bar, i) => {
            bar.style.transition = `height 0.6s ease ${i * 60}ms, opacity 0.6s ease`;
            bar.style.opacity    = '0.8';
          });
          barObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });
    if (bars[0]) barObserver.observe(bars[0].parentElement);
  }

  /* ---- Active nav link on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const secObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.classList.toggle(
              'active',
              a.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    }, { threshold: 0.35 });
    sections.forEach(s => secObserver.observe(s));
  }

  /* ---- Animated counter in hero stats ---- */
  function animateCounter(el, target, duration) {
    const start = performance.now();
    const step  = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = (target < 100)
        ? (eased * target).toFixed(1).replace(/\.0$/, '')
        : Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.stat-num[data-target]');
  if ('IntersectionObserver' in window && statNums.length) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, 1800);
          // Restore suffix after animation
          setTimeout(() => {
            el.textContent = el.textContent + suffix;
          }, 1900);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(el => counterObserver.observe(el));
  }

})();
