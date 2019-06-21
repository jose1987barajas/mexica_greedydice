function rollDice(){
    dices = []
    diceOne.draw.bind(diceOne,Math.floor(Math.random() * 6))()
    diceTwo.draw.bind(diceTwo, Math.floor(Math.random() * 6))()
    diceThree.draw.bind(diceThree, Math.floor(Math.random() * 6))()
    diceFour.draw.bind(diceFour, Math.floor(Math.random() * 6))()
    diceFive.draw.bind(diceFive, Math.floor(Math.random() * 6))()
    diceSix.draw.bind(diceSix, Math.floor(Math.random() * 6))()
    rolls--
    getCurrentPoints()
    if (rolls === 0) 
    { holdPoints();}
    playerOne.draw()
    playerTwo.draw()
    if (turn) playerOne.drawCurrentPoints()
    else playerTwo.drawCurrentPoints()
} document.getElementById("roll-dice").onclick = function() {
    rollDice(); 
}

function addPoints (points) {
     if ( turn )playerOne.score += points 
     else playerTwo.score += points
     playerOne.draw()
     playerTwo.draw()
     
}

function holdPoints() {
    addPoints(countCoincidences(dices)) 
    turn = !turn
    rolls = 3
    playerOne.draw()
    playerTwo.draw()
} document.getElementById("hold-points").onclick = function() {
  holdPoints();
}

function getCurrentPoints (){
  currentPoints = countCoincidences(dices)
  gameOver(currentPoints)
}



function countCoincidences(dices){
    const points = {
        pointsSixOfaKind : 3000,
        pointsStair : 2000,
        pointsThreePairs : 1500,
        pointsFiveOfaKind : 2000,
        pointsFourOfaKind : 1000,
        pointsThreeOfaKind : 350,
        pointsOcelot : 100,
        pointsCoyote : 50
                    }
	const counts = {}
	dices.forEach(el=>{
	if (counts[el]) counts[el]++
	else counts[el] = 1 
	})
  let ocelotCount = 0
  let coyoteCount = 0
  	let maxCount = 0
	let max
	for (let key in counts){
		if (counts[key] > maxCount){
		maxCount = counts[key]
		max = key
		}
    if (key === 'Ocelot') ocelotCount += counts[key]
    if (key === 'Coyote') coyoteCount += counts[key]	
	}
	if (maxCount === 6) return points.pointsSixOfaKind
  if (new Set(dices).size === 6) return points.pointsStair
  if (Object.values(counts).every(el=>el===2)) return points.pointsThreePairs
  if (maxCount === 5) {
    if (max === 'Coyote') return points.pointsFiveOfaKind + ocelotCount*points.pointsOcelot
    if (max === 'Ocelot') return points.pointsFiveOfaKind + coyoteCount*points.pointsCoyote
    else return points.pointsFiveOfaKind + ocelotCount*points.pointsOcelot + coyoteCount*points.pointsCoyote
  }
  if (maxCount === 4) {
    if (max === 'Coyote') return points.pointsFourOfaKind + ocelotCount*points.pointsOcelot
    if (max === 'Ocelot') return points.pointsFourOfaKind + coyoteCount*points.pointsCoyote
    else return points.pointsFourOfaKind + ocelotCount*points.pointsOcelot + coyoteCount*points.pointsCoyote
  }
  if (Object.values(counts).every(el=>el===3)) return points.pointsThreeOfaKind * 2 
    if (maxCount === 3) {
    if (max === 'Coyote') return points.pointsThreeOfaKind + ocelotCount*points.pointsOcelot
    if (max === 'Ocelot') return points.pointsThreeOfaKind + coyoteCount*points.pointsCoyote
    else return points.pointsThreeOfaKind + ocelotCount*points.pointsOcelot + coyoteCount*points.pointsCoyote
  }
  return coyoteCount * points.pointsCoyote + ocelotCount * points.pointsOcelot
}

function gameOver (currentPoints){ 
  if (playerOne.score >= winningScore) {
      ctx.fillStyle = "red"
  ctx.font = "50px Arial" 
  ctx.fillText ("PLAYER ONE WON!", 500, 400)
  } else if ( playerTwo.score >= winningScore ) {
    ctx.fillStyle = "red"
    ctx.font = "50px Arial" 
    ctx.fillText ("PLAYER TWO WON!", 500, 400)
}
}