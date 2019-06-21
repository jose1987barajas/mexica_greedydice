const canvas = document.querySelector("#mexiCanvas")
const ctx = canvas.getContext("2d")

let dices = []

//elements

let avocado = "Avocado"
let chili = "Chili"
let chocolate = "Chocolate"
let coyote = "Coyote"
let ocelot = "Ocelot"
let tomato = "Tomato"
const values = [avocado, chili, chocolate, coyote, ocelot, tomato]

//items


let diceOne = new Dice(300, 5)
let diceTwo = new Dice(550, 5)
let diceThree = new Dice(800, 5)
let diceFour = new Dice(300, 225)
let diceFive = new Dice(550, 225)
let diceSix = new Dice(800, 225)

let playerOne = new Player(300, 450)
let playerTwo = new Player(750, 450)
let turn = true

let rolls = 3
let currentPoints = ""

let winningScore = 10000





