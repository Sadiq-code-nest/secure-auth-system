//Task-8 Create a function called highestScore that will
// Receive a 1D array called Score
// Return the highest score

var name = ["Sadiq", "Rup", "Nibir", "Tuhin", "Shohidul", "Noman"];


function highestScore(scores) {
    console.log(scores);  
    var max = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];

        }
    }
    return max;

}
let scores = [20, 90, 10, 5, 50];
var MaxScore=highestScore(scores);
console.log("Highest Score:" + MaxScore);
