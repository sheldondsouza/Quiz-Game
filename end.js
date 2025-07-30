const username = document.getElementById('username');
const saveScorebtn = document.getElementById('saveScorebtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    saveScorebtn.disabled = !username.value;
});

saveHighScore = e => {
e.preventDefault();

const score = {
    score: Math.floor(Math.random() * 100), // Simulating a score for demonstration
    name: username.value    
};
highScores.push(score);

highScores.sort((a, b) => b.score - a.score);
highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("/");
};
