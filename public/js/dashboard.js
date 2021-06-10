// DASHBOARD.JS WILL HANDLE THE GETTING USERS POST AND MAKES NEW POST.

// route will send a user to the page that they can edit or delete a post will 
// find a post based on id.
$(".postBlock").click(function() {
    // internal Id is the unique id of each post.
    let internalID = $(this).data('userpostid');
    console.log(internalID)
    document.location.replace("/edit")
    // will need to build the function route and page that will allow a user to edit
    // the post and delete.
})



// button that routes the user to a page to add a new route.
const newPost = document.getElementById('post')

newPost.addEventListener('click', makeNewPost);
    function makeNewPost() {
        document.location.replace("/newpost")
    }
