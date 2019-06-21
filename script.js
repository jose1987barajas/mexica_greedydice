window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      playerOne.draw()
      playerTwo.draw();
    }
}

const startGame = new Audio ();
    startGame.src = "./audios/mexica_theme.mp3"

const rollSound = new Audio ();
    rollSound.src = "./audios/roll_dices.mp3";

const holdPointsSound = new Audio ();
    holdPointsSound.src = "./audios/mexica_hold_points.mp3";