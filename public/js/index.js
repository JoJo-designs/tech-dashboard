// INDEX.JS WILL HANDLE ROUTEING AROUND THE WEBPAGES
console.log("connneted")

// Selecting buttons from the Html
const logInBtn = document.getElementById('logIn')
const signUpBtn = document.getElementById('signUp')


logInBtn.addEventListener('click', logInHandler);
 function logInHandler() {
     document.location.replace("/login")
 }

signUpBtn.addEventListener('click', signUpHandler);
function signUpHandler() {
    document.location.replace("/signup")
}