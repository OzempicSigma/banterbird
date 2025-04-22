const username = "admin";

function renderPost(post) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);
}

function submitPost() {
    const message = document.getElementById("postInput").value;
    try {
        const response = fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            body: JSON.stringify({
                username: username,
                message: message,
            })
        })
    }
    catch (error) {
        console.error("Error submitting post:", error);
        }
}

window.onload = async () => {
    try {
        const response = await fetch("/api/posts");
        const posts = await response.json();
        posts.forEach(post => rednderPost(post));
    } catch (error){
        console.error("error", error);
    }
};
