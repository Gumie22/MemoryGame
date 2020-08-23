document.addEventListener('DOMContentLoaded', () =>{

    //card options
    const cardArray = [
        {
            name: 'balloons',
            img: 'images/balloons.jpg'
        },
        {
            name: 'balloons',
            img: 'images/balloons.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'bike',
            img: 'images/bike.jpg'
        },
        {
            name: 'bike',
            img: 'images/bike.jpg'
        },
        {
            name: 'car',
            img: 'images/car.jpg'
        },
        {
            name: 'car',
            img: 'images/car.jpg'
        },
        {
            name: 'snake',
            img: 'images/snake.jpg'
        },
        {
            name: 'snake',
            img: 'images/snake.jpg'
        },
        {
            name: 'iron',
            img: 'images/iron.jpg'
        },
        {
            name: 'iron',
            img: 'images/iron.jpg'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/skull.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
//check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src','images/stop.jpg')
            cards[optionTwoId].setAttribute('src','images/stop.jpg')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src','images/skull.jpg')
            cards[optionTwoId].setAttribute('src', 'images/skull.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You matched them all'
        }
    }
    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }
    createBoard()
})