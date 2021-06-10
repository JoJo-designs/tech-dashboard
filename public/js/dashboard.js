// DASHBOARD.JS WILL HANDLE THE GETTING USERS POST AND MAKES NEW POST.


$(".postBlock").click(function() {
    let internalID = $(this).data('userpostid');
    console.log(internalID);
    // will need to build the function route and page that will allow a user to edit
    // the post and delete.
})

const newPost = document.getElementById('post')

newPost.addEventListener('click', makeNewPost);
    function makeNewPost() {
        document.location.replace("/newpost")
    }
