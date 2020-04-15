    const cardArray = [
        {
            name: 'cheeseburger',
            src: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            src: 'images/fries.png'
        },
        {
            name: 'hotdog',
            src: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            src: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            src: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            src: 'images/pizza.png'
        },
        {
            name: 'cheeseburger',
            src: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            src: 'images/fries.png'
        },
        {
            name: 'hotdog',
            src: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            src: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            src: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            src: 'images/pizza.png'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('.result')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card); 
        }    
    }

    function flipCard() {
        let cards = document.querySelectorAll('img');
        let dataId = this.getAttribute('data-id');
        console.log(dataId);
        cardsChosen.push(cardArray[dataId].name);
        console.log(cardsChosen);
        cardsChosenId.push(dataId);
        console.log(cardsChosenId);
        this.setAttribute('src', cardArray[dataId].src)
        this.removeEventListener('click', flipCard)
        if (cardsChosen.length === 2) {
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                card.removeEventListener('click', flipCard);
            }
            setTimeout(checkForMatch, 500);
        }
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            card.addEventListener('click', flipCard);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[cardsChosenId[0]].setAttribute('src', 'images/white.png');
            cards[cardsChosenId[1]].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
            cards[cardsChosenId[0]].removeEventListener('click', flipCard);
            cards[cardsChosenId[1]].removeEventListener('click', flipCard);
        } else {
            cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png');
            cards[cardsChosenId[1]].setAttribute('src', 'images/blank.png');
            cards[cardsChosenId[0]].addEventListener('click', flipCard);
            cards[cardsChosenId[1]].addEventListener('click', flipCard);
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all';
            grid.style.display = 'none'
        }
    }

    createBoard();
