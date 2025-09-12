// Simple client-side login handling (mock auth for demo)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginPageForm');
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
    const email = (fd.get('email') || '').trim();
    const password = (fd.get('password') || '').trim();

    // Basic client validation
    if (!email) {
      showError(emailHelp, 'Please enter a valid email.');
      return;
    }
    if (password.length < 6) {
      showError(passwordHelp, 'Password must be at least 6 characters.');
      return;
    }

    // Mock authentication logic:
    // Accept any credentials for demo; in production, send to server via fetch()
    const mockUser = { email, name: email.split('@')[0] };

    // Save "session" to localStorage (simple)
    localStorage.setItem('jt_user', JSON.stringify(mockUser));
    // Redirect to homepage and reflect login (index should check localStorage to update UI)
    window.location.href = 'index.html?loggedin=1';
  });

  // Social login buttons - for demo they just show a message
  document.getElementById('btnGoogle').addEventListener('click', () => {
    alert('Social login is a placeholder. Integrate real OAuth on the server for production.');
  });
  document.getElementById('btnFacebook').addEventListener('click', () => {
    alert('Social login is a placeholder. Integrate real OAuth on the server for production.');
  });

  // Forgot password
  document.getElementById('forgotLink').addEventListener('click', (ev) => {
    ev.preventDefault();
    const em = prompt('Enter your account email to receive a recovery link:');
    if (em) {
      alert(`A recovery link has been (mock) sent to ${em}.`);
    }
  });
});
