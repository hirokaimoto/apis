buttonEl = document.getElementById('deck-btn');


buttonEl.addEventListener('click', function() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(deck => console.log(deck))
})