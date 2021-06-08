// LOGIN.JS WILL HANDLE LOG IN AND ROUTEING TO SIGN UP PAGE
const signUpBtn = document.getElementById('signUp')

// Event listener that changes the login page to the signup page
signUpBtn.addEventListener('click', signUpHandler);
    function signUpHandler() {
      document.location.replace("/signup")
}

// Logs in a user when they entered the correct data.
// breaking at line 19 according to the console
const loginHandler = async (event) => {
  event.preventDefault();
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      header: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler)