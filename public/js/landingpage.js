// LANDINGPAGE.JS HANDLES GETS THE ID OF POST AND MAKE EACH ONE CLICKABLE
// SO USERS 

$(".post").click(function() {
    let postId = $(this).data('uniquepostid');
    console.log("clicked");
    console.log(postId);
});