(function () {
  console.log('Tracker initialized');

  function bindTracking() {
    const form = document.querySelector('form');
    if (!form || form.dataset.tracked) return;

    form.dataset.tracked = 'true';
    form.addEventListener('submit', () => {
      const pixel = document.createElement('img');
      pixel.src = 'https://example.com/tracking.gif?event=form_submit&ts=' + Date.now();
      pixel.style.display = 'none';
      document.body.appendChild(pixel);
      console.log('Tracking pixel fired for form');
    });
  }

  const observer = new MutationObserver(bindTracking);
  observer.observe(document.body, { childList: true, subtree: true });

  document.addEventListener('DOMContentLoaded', bindTracking);
})();
