document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const emailHelp = document.getElementById('emailHelp');
  const passwordHelp = document.getElementById('passwordHelp');

  function showError(el, msg) {
    el.style.display = 'block';
    el.textContent = msg;
  }
  function hideError(el) {
    el.style.display = 'none';
    el.textContent = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideError(emailHelp);
    hideError(passwordHelp);

    const fd = new FormData(form);
    const name = (fd.get('name') || '').trim();
    const email = (fd.get('email') || '').trim();
    const password = (fd.get('password') || '').trim();
    const confirm = (fd.get('confirm') || '').trim();

    if (!email.includes('@')) {
      showError(emailHelp, 'Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      showError(passwordHelp, 'Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      showError(passwordHelp, 'Passwords do not match.');
      return;
    }

    const newUser = { name, email };
    localStorage.setItem('jt_user', JSON.stringify(newUser));

    alert('Signup successful! You are now logged in.');
    window.location.href = 'index.html?registered=1';
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
