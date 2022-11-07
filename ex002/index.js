

fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        console.log(postsArr)
        let html = ""

        for (let post of postsArr) {
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
            `
        }
        document.getElementById('posts').innerHTML = html
    })


document.getElementById('new-post').addEventListener('submit', function(e) {
    e.preventDefault()
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    const article = {
        title: postTitle,
        body: postBody
    }
    console.log(article)
})