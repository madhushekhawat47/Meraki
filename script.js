const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  if (username === 'seller' && password === 'password') {
    alert('Login Successful!');
    // Add code to redirect to seller dashboard page
  } else {
    alert('Invalid username or password!');
  }
});