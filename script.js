document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
 
    // Check if credentials are already stored
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
 
    if (storedUsername && storedPassword) {
      // Validate input against stored credentials
      if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        errorMessage.textContent = "";
      } else {
        errorMessage.textContent = "Invalid username or password.";
      }
    } else {
      // Save credentials to localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert('Account created! Please log in using your new credentials.');
      errorMessage.textContent = "";
    }
 
    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });