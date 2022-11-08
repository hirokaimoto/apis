let postArray = []
const titleInput = document.getElementById('post-title')
const bodyInput = document.getElementById('post-body')

function renderPosts() {
    let html = ""
    for (let post of postArray) {
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr>    
        `
    }
    document.getElementById('posts').innerHTML = html
}

const clearInputs = () => {
    titleInput.value = ""
    bodyInput.value = ""
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        postArray = data.slice(0, 5)
        renderPosts()
    })


document.getElementById('new-post').addEventListener('submit', function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const newPost = {
        title: postTitle,
        body: postBody
    }
    
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', 
    {method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
})
    .then(response => response.json())
    .then(data => {
        postArray.unshift(data)
        renderPosts()
        clearInputs()
    })
})

