console.log("connected");

const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    console.log(title)
    console.log(content)
}

document
    .querySelector('.newPost')
    .addEventListener('submit', newPostHandler)