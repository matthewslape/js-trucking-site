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
    const submitBtn = document.getElementById('quoteSubmit');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      status.textContent = '';
      status.className = 'form-status';

      try {
        const endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (!res.ok) throw new Error('Request failed');

        form.innerHTML = '<p style="font-size:1.05rem; font-weight:600;">Thanks! Your request is in.</p><p style="color:var(--steel); font-size:0.94rem;">We reply within one business day. For anything urgent, call <a href="tel:13602698462">(360) 269-8462</a> directly.</p>';
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Quote Request';
        status.className = 'form-status error';
        status.innerHTML = 'Something went wrong sending your request. Please try again, or call <a href="tel:13602698462">(360) 269-8462</a>.';
      }
    });
  }
});
