// SIGNUP.JS WILL HANDLE THE SIGNUP REQUEST

const login = document.getElementById('Login');

// switched the page from sign up to log in
login.addEventListener('click', logInHandler);
    function logInHandler() {
      document.location.replace("/login")
}