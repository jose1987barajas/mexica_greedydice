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


let diceOne = new Dice(300, 10)
let diceTwo = new Dice(550, 10)
let diceThree = new Dice(800, 10)
let diceFour = new Dice(300, 230)
let diceFive = new Dice(550, 230)
let diceSix = new Dice(800, 230)

// players

let playerOne = new Player(300, 450)
let playerTwo = new Player(750, 450)
let turn = true





