//Task-9 Create a function called highestRunScorer that will
// Receive a 2D array called playersInfo
// Based on the highest score, return the name of the player


function highestRunScorer(playersInfo) {
    console.log(playersInfo);
    let MaxScore = playersInfo[0][1];
    let MaxScorer = playersInfo[0][0];

    for (let i = 1; i < playersInfo.length; i++) {

        if (MaxScore < playersInfo[i][1]) 
        {
            MaxScore = playersInfo[i][1];
            MaxScorer = playersInfo[i][0];
        }

    }
    return MaxScorer;
}
    let playersInfo =
        [
            ["Sakib", 35],
            ["Tamim", 56],
            ["Mushfiq", 23],
            ["Riad", 78],
            ["Mehedi", 95],
            ["Mashrafee", 67]
        ]
    var TopScore = highestRunScorer(playersInfo);
    console.log("The Highest Scorer name is "+TopScore);