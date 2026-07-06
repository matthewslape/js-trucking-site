document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.innerHTML = '<p style="font-size:1.05rem; font-weight:600;">Thanks &mdash; your request is in.</p><p style="color:var(--steel); font-size:0.94rem;">We reply within one business day. For anything urgent, call (360) 269-8462 directly.</p>';
    });
  }
});
