// LANDINGPAGE.JS HANDLES GETS THE POST THAT WILL APPEAR ON THE HOMEPAGE 
// WHEN THE USER HAND ON THE PAGE.

function getPost() {
    fetch("/api/post/")
    .then(function (response) {
        if (response.status === 200) {
            response.json().then(data => console.log(data))
        }
    });
}

getPost();