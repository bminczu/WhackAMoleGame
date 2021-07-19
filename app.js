const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelectorAll('#timeLeft')
let score = document.querySelector('#score')

let result = 0

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    //assign id of random position to hit position for later use
    hitPosition = randomPosition.id
}

square.forEach(id => {
id.addEventListener('mousetap', () => {
    if(id.id === hitPosition){
        result = result + 1
        score.textContent = result
    }
})
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()