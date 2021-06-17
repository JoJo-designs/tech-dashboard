console.log("working")

const updatePost = document.getElementById("updatepost");
const deletePost = document.getElementById("deletepost");
const postId = document.querySelector('.titleBlock')
let internalID = postId.dataset.postid;
console.log(internalID);

// updates a post
updatePost.addEventListener('click', function() {
    console.log("button clicked")

    const post_title = document.getElementById("titleBlock").value.trim();
    const post_content = document.getElementById("content").value.trim();
    console.log(post_title);
    console.log(post_content);
    console.log(internalID);

    if (post_title && post_content) {
        const response = fetch(`api/post/${internalID}`, {
            method: 'PUT',
            body: JSON.stringify({ post_title, post_content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            alert('Post has been updated');
        } else {
            alert("post could not be updated")
        }
    } 
});

// deletes a post
deletePost.addEventListener('click', function() {
    console.log("button clicked")
})