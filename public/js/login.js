// LOGIN.JS WILL HANDLE LOG IN AND ROUTEING TO SIGN UP PAGE
const signUpBtn = document.getElementById('signUp')

// Event listener that changes the login page to the signup page
signUpBtn.addEventListener('click', signUpHandler);
    function signUpHandler() {
      document.location.replace("/signup")
}