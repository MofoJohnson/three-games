function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function sortImages(whichImg, randomNumber) {
    let playerDice = `dice${randomNumber}.png`;
    let playerImgPath = document.getElementsByClassName(whichImg)[0].src.split("/");
    playerImgPath = playerImgPath.slice(0, playerImgPath.length - 1).join("/");
    playerImgPath = `${playerImgPath}/${playerDice}`;

    return playerImgPath;
}

function checkWinner(randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2) {
        return "Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        return "Player 2 wins!";
    }

    return "Draw!";
}

const [randomNumber1, randomNumber2] = [getRandomNumber(), getRandomNumber()];

let [player1NewImgPath, player2NewImgPath] = [sortImages("img1", randomNumber1), sortImages("img2", randomNumber2)];

let player1ImgPath = document.getElementsByClassName("img1")[0];
player1ImgPath.src = player1NewImgPath;

let player2ImgPath = document.getElementsByClassName("img2")[0];
player2ImgPath.src = player2NewImgPath

const diceResult = checkWinner(randomNumber1, randomNumber2);

const heading = document.querySelector("h1");
heading.innerHTML = diceResult;
