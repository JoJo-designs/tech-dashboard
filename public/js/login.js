// LOGIN.JS WILL HANDLE LOG IN AND ROUTEING TO SIGN UP PAGE
const signUpBtn = document.getElementById('signUp')

// Event listener that changes the login page to the signup page
signUpBtn.addEventListener('click', signUpHandler);
    function signUpHandler() {
      document.location.replace("/signup")
}

// Logs in a user when they entered the correct data.
// currently doesn't work
const loginHandler = async (event) => {
  event.preventDefault();
  console.log("this function was called")
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler)