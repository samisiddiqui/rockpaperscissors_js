let choices = ["rock", "paper", "scissors","rock", "paper", "scissors"];

function playRound(p, c) {
    if (typeof(p) == 'string' && choices.includes(p.toLowerCase())) {
        let p1 = choices.indexOf(p.toLowerCase());
        if (p1 == c) {
            console.log("Draw");
            return 0;
        } else {
            if (choices[p1 + 1] == choices[c]) {
                console.log(`${choices[c]} beats ${choices[p1]}. You lose.`);
                return -1;
            } else {
                console.log(`${choices[p1]} beats ${choices[c]}. You win!`);
                return 1;
            }}
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