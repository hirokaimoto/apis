buttonEl = document.getElementById('deck-btn');

const getApi = function() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(deck => console.log(deck))
}

buttonEl.addEventListener('click', getApi)

