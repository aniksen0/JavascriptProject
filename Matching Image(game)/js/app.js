document.addEventListener('DOMContentLoaded', () => {
    const cardArray=[
        {
            name:'pig',
            img: 'img/1.png'
        },
        {
            name:'bed',
            img: 'img/2.png'
        },
        {
            name:'carpet',
            img: 'img/3.png'
        },
        {
            name:'duck',
            img: 'img/4.png'
        },
        {
            name:'ring',
            img: 'img/5.png'
        },
        {
            name:'drum',
            img: 'img/6.png'
        },
        {
            name:'pig',
            img: 'img/1.png'
        },
        {
            name:'bed',
            img: 'img/2.png'
        },
        {
            name:'carpet',
            img: 'img/3.png'
        },
        {
            name:'duck',
            img: 'img/4.png'
        },
        {
            name:'ring',
            img: 'img/5.png'
        },
        {
            name:'drum',
            img: 'img/6.png'
        },
        {
            name:'empty',
            img: 'img/emp.png'
        }
    ]

cardArray.sort(()=>0.5-Math.random())
const grid= document.querySelector('.grid')
const resultDisplay =document.querySelector('#result')
var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]
function createBoard(){
    
    for(let i=0;i<cardArray.length;i++)
    {
        var card=document.createElement('img')
        card.setAttribute('src','img/emp.png')
        card.setAttribute('data-idd',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch()
{
    var cards=document.querySelectorAll("img");
    const optionOneId=cardsChosenId[0]
    const optionTwoId=cardsChosenId[1]
    if(optionOneId==optionTwoId)
    {
        alert("You found a match");
        cards[optionOneId].setAttribute('src','img/emp.png')
        cards[optionTwoId].setAttribute('src','img/emp.png')
        cardsWon.push(cardsChosen)
    }
    else
    {
        cards[optionOneId].setAttribute('src',img/emp.png)
        cards[optionTwoId].setAttribute('src',img/emp.png)
        alert("sorry,try again")
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length===cardArray.length/6)
    {
        resultDisplay.textContent="congratulation you won"
    }
}
function flipCard()
{
    var cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2)
    {
        setTimeout(checkForMatch,500)
    }
}
createBoard()
})
