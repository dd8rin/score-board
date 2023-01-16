
let awayScoreCount = document.getElementById("away-score-count")
let homeScoreCount = document.getElementById("home-score-count")
let count = 0
let count1 = 0


function plusone() {
    count += +1
    homeScoreCount.innerText = count
    console.log()
    
}

function plustwo() {
    count += +2
    homeScoreCount.innerText = count
}

function plusthree() {
    count += +3
    homeScoreCount.innerText = count
}



 function addone() {
    count1 += +1
    awayScoreCount.innerText = count1
   
}


function addtwo() {
    count1 += +2
    awayScoreCount.innerText = count1
    
}

function addthree() {
    count1 += +3
    awayScoreCount.innerText = count1
    
 }
 
 function ngame() {
    count = 0
    homeScoreCount.innerText = 0
    awayScoreCount.innerText = 0
}













