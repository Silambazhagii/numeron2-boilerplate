// Iteration 8: Making scoreboard functional

const score = document.getElementById('score-board');
const playbtn = document.getElementById('play-again-button')

playbtn.addEventListener('click',()=>{
    window.location.href='game.html'
    sessionStorage.removeItem('scr')
})
score.innerText = sessionStorage.getItem("scr") || 0;

