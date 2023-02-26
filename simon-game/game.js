const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let hasStarted = false;
let currentLevel = 1

$(document).on("keypress", function () {
    if (!hasStarted) {
        hasStarted = true;
        nextSequence();
    }
});

$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentIndex) {
    if (gamePattern[currentIndex] === userClickedPattern[currentIndex]) {

        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("h1").text("Game over, press any key to restart");
        $("body").addClass("game-over");
        playSound("wrong");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#level-title").text(`Level ${currentLevel}`);
    currentLevel ++

    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(chosenColour) {
    let colourAudio = new Audio(`sounds/${chosenColour}.mp3`);
    colourAudio.play();
}

function animatePress(chosenColour) {
    $(`#${chosenColour}`).addClass("pressed");

    setTimeout(function () {
        $(`#${chosenColour}`).removeClass("pressed");
    }, 100);
}

function startOver() {
    currentLevel = 1;
    gamePattern = [];
    hasStarted = false;
}
