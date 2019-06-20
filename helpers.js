function rollDice(){
    diceOne.draw.bind(diceOne,
         Math.floor(Math.random() * 6))()
    diceTwo.draw.bind(diceTwo, Math.floor(Math.random() * 6))()
    diceThree.draw.bind(diceThree, Math.floor(Math.random() * 6))()
    diceFour.draw.bind(diceFour, Math.floor(Math.random() * 6))()
    diceFive.draw.bind(diceFive, Math.floor(Math.random() * 6))()
    diceSix.draw.bind(diceSix, Math.floor(Math.random() * 6))()
} document.getElementById("roll-dice").onclick = function() {
    rollDice();
}

function addPoints () {
    
}

function holdPoints() {

} document.getElementById("hold-points").onclick = function() {
    holdPoints();
}



function countCoincidences(array){
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
	array.forEach(el=>{
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
  if (new Set(array).size === 6) return points.pointsStair
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