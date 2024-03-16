document.addEventListener('DOMContentLoaded', function() {
  const modeToggleBtn = document.getElementById('mode-toggle');
  const body = document.body;

  modeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      if (body.classList.contains('light-mode')) {
          modeToggleBtn.textContent = 'Toggle Dark Mode';
      } else {
          modeToggleBtn.textContent = 'Toggle Light Mode';
      }
  });
});
