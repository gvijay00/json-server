
const apiUrl = "http://localhost:3000/posts";

const createBtn = document.getElementById("createBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const patchBtn = document.getElementById("patchBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Create button - Adds a new post
createBtn.addEventListener("click", async () => {
    const newPost = {
        title: "New Post",
        content: "This is a new post created using JSON Server.",
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
        const data = await response.json();
        alert(`Post created with ID: ${data.id}`);
    } catch (error) {
        console.error("Error creating post:", error);
    }
});

// Get button - Fetches all posts
getBtn.addEventListener("click", async () => {
    try {
        const response = await fetch(apiUrl);
        const posts = await response.json();
        console.log("All Posts:", posts);
        alert("Check the console for all posts.");
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
});

// Put button - Updates an existing post
putBtn.addEventListener("click", async () => {
    const updatedPost = {
        id: 1, // You can change this ID to update a specific post
        title: "Updated Post",
        content: "This is an updated post content.",
    };

    try {
        const response = await fetch(`${apiUrl}/${updatedPost.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
        });
        const data = await response.json();
        alert(`Post with ID: ${data.id} updated.`);
    } catch (error) {
        console.error("Error updating post:", error);
    }
});

// Patch button - Partially updates an existing post
patchBtn.addEventListener("click", async () => {
    const partialUpdate = {
        title: "Partially Updated Post",
    };

    try {
        const response = await fetch(`${apiUrl}/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(partialUpdate),
        });
        const data = await response.json();
        alert(`Post with ID: ${data.id} partially updated.`);
    } catch (error) {
        console.error("Error partially updating post:", error);
    }
});

// Delete button - Deletes a post
deleteBtn.addEventListener("click", async () => {
    const postId = 1; // You can change this ID to delete a specific post

    try {
        const response = await fetch(`${apiUrl}/${postId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            alert(`Post with ID: ${postId} deleted.`);
        } else {
            console.error("Error deleting post");
        }
    } catch (error) {
        console.error("Error deleting post:", error);
    }
});
