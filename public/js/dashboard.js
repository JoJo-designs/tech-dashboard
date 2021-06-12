// DASHBOARD.JS WILL HANDLE THE GETTING USERS POST AND MAKES NEW POST.

// route will send a user to the page that they can edit or delete a post will 
// find a post based on id.
$(".postBlock").click(function() {
    // internal Id is the unique id of each post.
    let internalID = $(this).data('userpostid');
    console.log(internalID)
    // I need a way to get the internal id to the backend so I can make a call to 
    // get the data for that post and put it in the input an text box
    window.location.href = `/edit/${internalID}`
})



// button that routes the user to a page to add a new route.
const newPost = document.getElementById('post')

newPost.addEventListener('click', makeNewPost);
    function makeNewPost() {
        document.location.replace("/newpost")
    }
