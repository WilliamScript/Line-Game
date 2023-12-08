//This Function puts a 'click' event listener on the button to make the line appear and the button dissapear
//Still needed: A button to make a new 'new game' button appear

const startButton = document.querySelector('button')
startButton.addEventListener('click', () => {
    buttonToggle();
    lineToggle();
})
//Added the score for our mouseover event
var score = 0;
//this function will upgrade the count every mouse hover over the line
document.getElementById('line').addEventListener('mouseover', () =>{
    score = score++
    document.getElementById('p').innerHTML(`Your score is ${score}`)
})

function buttonToggle(){
    document.getElementById('btn').toggleAttribute('hidden')
}

function lineToggle(x){
    document.getElementById('line').toggleAttribute('hidden')        
}