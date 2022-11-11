const author = document.getElementById('author-name')
const cryptoHeader = document.getElementById('crypto-header')
const cryptoData = document.getElementById('crypto-data')


fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        author.textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjgxNjg1NjI&ixlib=rb-4.0.3&q=80&w=1080)`
    })


 fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(res => {
        if (!res.ok) {
            throw Error('Something went wrong')
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        let img = `
        <img src=${data.image.small}>
        <span>${data.name}</span>
        `
        let prices = `
        <p>Current Price: ${data.market_data.current_price.usd}</p>
        <p>24H High: ${data.market_data.high_24h.usd}</p>
        <p>24H Low: ${data.market_data.low_24h.usd}</p>
        `
        cryptoHeader.innerHTML = img
        cryptoData.innerHTML += prices

    })
    .catch(err => console.error(err))

console.log(cryptoData.innerHTML)
