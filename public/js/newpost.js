const newPostHandler = async (event) => {
    event.preventDefault();

    const post_title = document.getElementById("title").value.trim();
    const post_content = document.getElementById("content").value.trim();
    console.log(post_title)
    console.log(post_content)

    if (post_title && post_content) {
        const response = await fetch('api/post', {
            method: 'POST',
            body: JSON.stringify({ post_title, post_content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('post could not be added');
        }
    }
};

document
    .querySelector('.newPost')
    .addEventListener('submit', newPostHandler)