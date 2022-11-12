const author = document.getElementById('author-name')
const cryptoHeader = document.getElementById('crypto-header')
const cryptoData = document.getElementById('crypto-data')
const timeEl = document.getElementById('time')
const weather = document.getElementById('weather')

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



function displayTime() {
const timeNow = new Date().toLocaleTimeString ('en-US', 
        { hour12: true, 
        hour: "numeric", 
        minute: "numeric"});

timeEl.innerHTML = timeNow

}

setInterval(displayTime, 1000)


navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if(!res.ok) {
                throw Error('Weather data not available')
            }
            return res.json()
        })
        .then(data => {
            console.log(data.main.temp)
            console.log(data.weather[0].icon)
            weather.innerHTML = `
            <img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>
            <p class='temp'>${Math.round(data.main.temp)}°</p>
            <p class='city'>${data.name}</p>
            `
        })
        .catch(err => console.error(err))
})

// function showLocation(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     alert("Latitude : " + latitude + " Longitude: " + longitude);
//  }

//  function errorHandler(err) {
//     if(err.code == 1) {
//        alert("Error: Access is denied!");
//     } else if( err.code == 2) {
//        alert("Error: Position is unavailable!");
//     }
//  }
    
//  function getLocation() {

//     if(navigator.geolocation) {
       
//        // timeout at 60000 milliseconds (60 seconds)
//        var options = {timeout:60000};
//        navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
//     } else {
//        alert("Sorry, browser does not support geolocation!");
//     }
//  }
//  getLocation()