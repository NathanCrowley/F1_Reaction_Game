
// turn all the bottom lights on one by one from left to right
function startFunction(){
    // light 1
    setTimeout(() => {document.getElementById("one").style.background = "red";} , 500);
    // light 2
    setTimeout(() => {document.getElementById("two").style.background = "red";} , 1000);
    // light 3
    setTimeout(() => {document.getElementById("three").style.background = "red";} , 2000);
    // light 4
    setTimeout(() => {document.getElementById("four").style.background = "red";} , 3000);
    // lights out and start timer
    setTimeout(() => {lightsOut();}, 4000);
}

//turn the bottom lights back to black at a random time and start the reaction timer
function lightsOut(){
    function getRandomTime(min,max){
        return Math.random() * (max - min) + min;
    }
    //console.log(getRandomTime(2000,6000))
    const time = getRandomTime(1000,3000);
    console.log(time)
    setTimeout(() => {document.getElementById("one").style.background = "#000000";} , time);
    setTimeout(() => {document.getElementById("two").style.background = "#000000";} , time);
    setTimeout(() => {document.getElementById("three").style.background = "#000000";} , time);
    setTimeout(() => {document.getElementById("four").style.background = "#000000";} , time);    

    setTimeout(() => {starttimer()} , time);
}

function starttimer(){
    start = Date.now();
}
// function called when stop button pressed
function stopFunction(){
    var timepassed = Date.now() - start;
    document.getElementById("reactionTime").innerHTML = timepassed;
}