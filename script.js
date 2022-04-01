let choices = ["rock", "paper", "scissors", "rock", "paper", "scissors"];
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
let pScore = 0;
let cScore = 0;

function playRound(p, c) {
    if (typeof (p) == 'string' && choices.includes(p.toLowerCase())) {
        let p1 = choices.indexOf(p.toLowerCase());
        if (p1 == c) {
            resultsDiv.textContent = 'Draw';
            console.log("Draw");
        } else {
            if (choices[p1 + 1] == choices[c]) {
                console.log(`${choices[c]} beats ${choices[p1]}. You lose.`);
                resultsDiv.textContent = `${choices[c]} beats ${choices[p1]}. You lose.`;
                score(-1);
            } else {
                console.log(`${choices[p1]} beats ${choices[c]}. You win!`);
                resultsDiv.textContent = `${choices[p1]} beats ${choices[c]}. You win!`
                score(1);
            }
        }
    } else {
        console.log('invalid input');
    }
}

function computerPlay() {
    let v = Math.floor(Math.random() * 3);
    return v;
}

function game() {
    let results = [];
    for (let i = 0; i < 5; i++) {
        results.push(playRound(prompt("Rock, paper, or scissors?"), computerPlay()));
    }
    console.log(results);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        let btnVal = e.path[0].id;
        playRound(btnVal, computerPlay());
        //results.append(resultsDiv);
        //console.log(btnVal);
    })
});

function score(a) {
    if (a == -1) {
        cScore += 1;
        if (cScore != 5) {
            scoreDiv.textContent = `The score is Computer: ${cScore} vs Player: ${pScore}`
        } else {
            scoreDiv.textContent = `The computer wins the best of 5! Final score is Computer: ${cScore} vs Player: ${pScore}`;
            cScore = 0;
            pScore = 0;
        }
    }
    else {
        pScore += 1;
        if (pScore != 5) {
            scoreDiv.textContent = `The score is Computer: ${cScore} vs Player: ${pScore}`
        } else {
            scoreDiv.textContent = `You win the best of 5! Final score is Computer: ${cScore} vs Player: ${pScore}`;
            cScore = 0;
            pScore = 0;
        }
    }
}