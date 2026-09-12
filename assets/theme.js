(() => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try {
    const saved = localStorage.getItem('kt-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch {}

  function applyTheme() {
    const dark = preference ? preference === 'dark' : systemTheme.matches;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#101722' : '#f7f9fc';
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      const label = dark ? 'Light mode' : 'Dark mode';
      toggle.setAttribute('aria-label', label);
      toggle.querySelector('span').textContent = label;
    }
  }

  applyTheme();
  systemTheme.addEventListener('change', applyTheme);
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.hidden = false;
    applyTheme();
    toggle.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('kt-theme', preference); } catch {}
      applyTheme();
    });
  });
})();
