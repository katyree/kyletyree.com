document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.querySelector('fieldset').disabled = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('[role="status"]');
    status.textContent = 'Demo complete. On a live business website, your inquiry would be delivered to the owner. No information was sent or saved here.';
    status.hidden = false;
  });
});
