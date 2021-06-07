// DASHBOARD.JS WILL HANDLE THE GETTING USERS POST AND MAKES NEW POST.



const newPost = document.getElementById('post')

newPost.addEventListener('click', makeNewPost);
    function makeNewPost() {
        document.location.replace("/newpost")
    }
