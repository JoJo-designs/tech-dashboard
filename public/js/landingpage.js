// LANDINGPAGE.JS HANDLES GETS THE ID OF POST AND MAKE EACH ONE CLICKABLE
// SO USERS 

$(".post").click(function() {
    let postId = $(this).data('uniquepostid');
    console.log("clicked");
    console.log(postId);
    // Will need to build the route the will allow a user to viwe the post with
    // the comments.
});