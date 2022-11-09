buttonEl = document.getElementById('deck-btn');
let deckId = ""
let drawCards = document.getElementById('draw-cards-btn')

if (deckId) {
    drawCards.style.display = 'block'
} else {
    drawCards.style.display = 'none'
}

const getApi = function() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(deck => {
            console.log(deck)
            deckId = deck.deck_id
        })
        drawCards.style.display = 'block'
            
}

buttonEl.addEventListener('click', getApi)


drawCards.addEventListener('click', drawTwoCards)


function drawTwoCards() {
    if (deckId) {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(cards => console.log(cards))
    } else {
        alert('Please generate a new deck first')
    }
}