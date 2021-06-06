// SIGNUP.JS WILL HANDLE THE SIGNUP REQUEST

const login = document.getElementById('Login');

// switched the page from sign up to log in
login.addEventListener('click', logInHandler);
    function logInHandler() {
      document.location.replace("/login")
}

// Form that allows a user to sign up. password is hidden.
const signUpForm = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const user_name = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log(email);
  console.log(user_name);
  console.log(password);

  if (email && user_name && password) {
    const response = await fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({ email, user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('dashboard')
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpForm)
