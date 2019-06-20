const canvas = document.querySelector("#mexiCanvas")
const ctx = canvas.getContext("2d")

const dices = []

//elements

let avocado = "Avocado"
let chili = "Chili"
let chocolate = "Chocolate"
let coyote = "Coyote"
let ocelot = "Ocelot"
let tomato = "Tomato"
const values = [avocado, chili, chocolate, coyote, ocelot, tomato]

//items


let diceOne = new Dice(100, 100)
let diceTwo = new Dice(300, 100)
let diceThree = new Dice(500, 100)
let diceFour = new Dice(100, 300)
let diceFive = new Dice(300, 300)
let diceSix = new Dice(500, 300)

// players

let playerOne = new Player(100, 500)
let playerTwo = new Player(450, 500)





