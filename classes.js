class Dice {
    constructor(x, y) {
       this.x = x 
       this.y = y
       this.width = 200
       this.height = 200 
       this.avocado = new Image()
       this.avocado.src = "./images/dices/Avocado.png"
       this.chili = new Image()
       this.chili.src = "./images/dices/Chili.png"
       this.chocolate = new Image()
       this.chocolate.src = "./images/dices/Chocolate.png"
       this.coyote = new Image()
       this.coyote.src = "./images/dices/Coyote.png"
       this.ocelot = new Image()
       this.ocelot.src = "./images/dices/Ocelot.png"
       this.tomato = new Image()
       this.tomato.src = "./images/dices/Tomato.png"
    }    
    draw(face) {

        ctx.drawImage([
            this.avocado, 
            this.chili, 
            this.chocolate, 
            this.coyote, 
            this.ocelot, 
            this.tomato][face], this.x, this.y, this.width, this.height)
        dices.push(values[face])
    }
}

class Player {
    constructor(x, y) {
        this.x = x 
        this.y = y
        this.width = 250
        this.height = 150   
        this.score = 0
    }
    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "white"
        ctx.fillRect(this.x+5, this.y+5, this.width-10, this.height-10)
        ctx.fillStyle = "black"
        ctx.font = "20px Arial"
        ctx.fillText ("Score Player One", 350, 480);
        ctx.fillStyle = "black"
        ctx.font = "20px Arial"
        ctx.fillText ("Score Player Two", 800, 480)
        ctx.fillText (this.score, this.x+100, this.y+50)
    }
}    


