/*

Collect|
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."*/

const uefaEuro2016 = (teams, scores) =>
    scores[0] > scores[1]
        ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
        : scores[0] < scores[1]
        ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
        : `At match ${teams[0]} - ${teams[1]}, teams played draw.`;

//A shortned version
const uefaEuro2017 = (team, score) =>
    `At match ${team[0]} - ${team[1]}, ${
        score[0] == score[1]
            ? 'commands played draw.'
            : (score[0] > score[1] ? team[0] : team[1]) + ' won!'
    }`;
