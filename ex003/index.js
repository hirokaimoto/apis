const buttonEl = document.getElementById('deck-btn');
let deckId = ""
const drawCards = document.getElementById('draw-cards-btn')
const cardsImg = document.getElementById('cards')

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
    .then(data =>  {
        cardsImg.children[0].innerHTML = `
        <img src='${data.cards[0].image}'class='card'>
        `
        cardsImg.children[1].innerHTML = `
        <img src='${data.cards[1].image}'class='card'>
        `
        console.log(data)
    })
    
    } else {
        alert('Please generate a new deck first')
    }
}

function compareCards(card1, card2) {
    let result1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
    let result2 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']

    if (isNaN(parseInt(card1.value))) {
        switch (card1.value) {
            case 'JACK':
                card1.value = 11
                break;
            case 'QUEEN':
                card1.value = 12
                break;
            case 'KING':
                card1.value = 13
                break;
            case 'ACE':
                card1.value = 14
        } 
    }
    if (isNaN(parseInt(card2.value))) {
        switch (card2.value) {
            case 'JACK':
                card2.value = 11
                break;
            case 'QUEEN':
                card2.value = 12
                break;
            case 'KING':
                card2.value = 13
                break;
            case 'ACE':
                card2.value = 14
        } 
    }

    if (parseInt(card1.value) > parseInt(card2.value)) {
        console.log('Card 1 Wins')
    } else if (parseInt(card2.value) > parseInt(card1.value)) {
        console.log('Card 2 Wins')
    } else {
        console.log('DRAW')
    }
}


const test1 = {
    value: '2'
}
const test2 = {
    value: 'QUEEN'
}


function determineWinner(card1, card2) {
    const result = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']

    if (result.indexOf(card1.value) > result.indexOf(card2.value)) {
        console.log('Card 1 Wins')
    } else if (result.indexOf(card1.value) < result.indexOf(card2.value)) {
        console.log('Card 2 Wins')
    } else {
        console.log('DRAW')
    }

}

determineWinner(test1, test2)