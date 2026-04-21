let cards = [];
let sum = 0;

let message = "";

let hasBlackjack = false;
let isAlive = false;
let isFirstPlay = true;
let stayed = false;

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

function startGame(){
    if (isFirstPlay){
        for (let i = 0; i < 2; i++){
            let temp = getRandomCard();
            cards.push(temp);
            sum += temp;
        }

        isAlive = true;

        renderGame();

        console.log(cards);

        isFirstPlay = false;
    }
}

function renderGame(){
    if (sum < 21){
        message = "Do you wanna draw a new card?";
    } else if (sum === 21){
        message = "Wow! BlackJack";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13 + 1);
    if (randomCard === 1){
        return 11;
    } else if (randomCard > 10){
        return 10;
    } else {
        return randomCard;
    }
}

function newCard(){
    if (isAlive && !hasBlackjack && !stayed){
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
}

function startAgain(){
    if (!isFirstPlay){
        cards = [];
        sum = 0;
        message = "";

        for (let i = 0; i < 2; i++){
            let temp = getRandomCard();
            cards.push(temp);
            sum += temp;
        }

        isAlive = true;

        renderGame();
    }
}

function stay(){
    stayed = true;
}


