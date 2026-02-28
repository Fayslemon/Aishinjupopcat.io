// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const scoreDisplay = document.querySelector("#score");

// Score variable
let score = 0;

// The two images of the POP CAT
const openMouthImg = "./images/open.png";
const closeMouthImg = "./images/close.png";

// The two Popping sounds
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handlers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
});

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
});

// Functions
function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();

    // Increase score
    score++;
    scoreDisplay.textContent = score;
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}