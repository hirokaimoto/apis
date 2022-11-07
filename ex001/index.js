// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     document.getElementById('image-container').innerHTML = `<img src='${data.message}'>`
//   });


function generateData() {
fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('placeholder').textContent = `${data.activity}`
    })

    document.getElementById('btn').classList.add('animated')

    setInterval(function() {document.getElementById('btn').classList.remove('animated')}, 6000)
}
    document.getElementById('btn').addEventListener('click', generateData)