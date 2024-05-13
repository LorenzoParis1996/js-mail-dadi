alert('il dado verrà lanciato. chi vincerà?');
const humanPlayer = Math.floor(Math.random() * 6 + 1, 10);
const aiPlayer = Math.floor(Math.random() * 6 + 1, 10);

for (let diceFace = 1; diceFace <= 6; diceFace++) {

    if (humanPlayer > aiPlayer) {
        console.log(humanPlayer, aiPlayer, 'vince l umano');
    } else if (humanPlayer < aiPlayer) {
        console.log(humanPlayer, aiPlayer, 'vince la macchina');
    } else {
        console.log(humanPlayer, aiPlayer, 'siete pari');
    }
}