// INDEX.JS WILL HANDLE ROUTING IN THE NAV AND THE API CALL FOR THE HOME PAGE

// Selecting buttons from the Html
const logInBtn = document.getElementById('logIn')
const homePage = document.getElementById('homePage')
const dashBoard = document.getElementById('userDashBoard')


// event listener and handler for returning to the home page
homePage.addEventListener('click', goHome);
    function goHome() {
      document.location.replace("/")
    }

// Event listener and handler for login page
logInBtn.addEventListener('click', logInHandler);
    function logInHandler() {
      document.location.replace("/login")
 }

 // event listener and handler for dashboard
dashBoard.addEventListener('click', dashboardHandler);
function dashboardHandler() {
    document.location.replace("/dashboard")
}

