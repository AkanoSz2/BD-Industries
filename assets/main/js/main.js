// Animation welcome Page
const canvas = document.getElementById('street-canva');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 200;

const streetImg = document.getElementById('street');

let x = 0;
let x2 = CANVAS_WIDTH;
const movSpeed = 1;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Update positions inside the animation loop
    if (x <= -CANVAS_WIDTH) {
        x = CANVAS_WIDTH;
    } else {
        x -= movSpeed;
    }

    if (x2 <= -CANVAS_WIDTH) {
        x2 = CANVAS_WIDTH;
    } else {
        x2 -= movSpeed;
    }

    ctx.drawImage(streetImg, x, 0); // Draw the canvas itself
    ctx.drawImage(streetImg, x2, 0); // Draw the canvas itself

    requestAnimationFrame(animate);
}




// Call the animate function once the street image is loaded
streetImg.onload = function() {
    animate();
};


//starts Audio Page 1
var targetSection = document.getElementById('welcome=page');
var audioWelcome = document.getElementById('audioWelcome');

window.onload = function() {
    audioWelcome.play();
};


//Start Start button Interaction
const ButtonStart = document.getElementById('Play')
ButtonStart.addEventListener("click", function() {
    welcomeMain.style.display = "none";
    playMain.style.display = "flex"
    /*audioWelcome.pause(); */
});




// Back buttons 
const PlayBack = document.getElementById('back')
const AudioBack = document.getElementById('back-audio')
AudioBack.addEventListener("click", function() {
    audioMain.style.display = "none";
    playMain.style.display = "flex"
    audioWelcome.play();
});
PlayBack.addEventListener("click", function() {
    playMain.style.display = "none";
    welcomeMain.style.display = "flex"
    audioWelcome.play();
});




//Games Section Button
//Memes section

//Audio Section Button
const AudioButton = document.getElementById('audio-button')
AudioButton.addEventListener("click", function() {
    playMain.style.display = "none";
    audioMain.style.display = "flex";
});

// //audio Page 1
// const AudioButton1 = document.getElementById("audio-pg-1");
// const AudioPage1 = document.querySelector(".audio-page-one");

// AudioButton1.addEventListener("click", function() {
//   AudioPage1.style.display = "flex";
//   audioMain.style.display = "none";
//   audioWelcome.pause();
// });


// //audio Page 2
// const AudioButton2 = document.getElementById("audio-pg-2");
// const AudioPage2 = document.querySelector(".audio-page-two");

// AudioButton2.addEventListener("click", function() {
//   AudioPage2.style.display = "flex";
//   audioMain.style.display = "none";
//   audioWelcome.pause();
// });


// //audio Page 3
// const AudioButton3 = document.getElementById("audio-pg-3");
// const AudioPage3 = document.querySelector(".audio-page-three");

// AudioButton3.addEventListener("click", function() {
//   AudioPage3.style.display = "flex";
//   audioMain.style.display = "none";
//   audioWelcome.pause();
// });

//queue system
const progress = document.getElementById("progress-queue");

const buttonQueue = document.getElementById("audio-pg-queue");
const buttonAudio = document.getElementById("audio-button");

const queueMain = document.querySelector(".audio-queue");
const welcomeMain = document.querySelector(".welcome-page");
const playMain = document.querySelector(".play-main");
const audioMain = document.querySelector(".audio-main");

const audio1 = document.getElementById("my_audio1");
const audio2 = document.getElementById("my_audio2");
const audio3 = document.getElementById("my_audio3");


const files = [{
        audio: audio1,
        progress: progress,
        duration: 110000
    },
    {
        audio: audio2,
        progress: progress,
        duration: 19500
    },
    {
        audio: audio3,
        progress: progress,
        duration: 110000
    },
];

let currentIndex = 0;



buttonQueue.addEventListener("click", function() {
    queueMain.style.display = "flex"; // Display the "audio-queue" div
    audioMain.style.display = "none"; // Display the "queue-main" div
    audioWelcome.pause();

    startFile(files[currentIndex]);
});

function startFile(file) {
    file.audio.play();
    startAnimation(file.progress, file.duration);

    file.audio.addEventListener('ended', function() {
        // delay the start of the next audio file by 1.5 seconds
        setTimeout(function() {
            currentIndex++;
            if (currentIndex < files.length) {
                startFile(files[currentIndex]);
            }
        }, 1500);

        // add CSS code here to change styles based on current audio file
        if (file.audio === audio2) {
            // change styles for second audio file
            queueMain.style.backgroundColor = 'lightgray';

            const progressElement = document.getElementById('progress-queue');
            progressElement.style.setProperty('accent-color', 'lightcyan');
            const myParagraph = document.querySelector(".wait");
            myParagraph.textContent = "Cocalarul robot";

            const novaPng = document.querySelector('.specter');
            novaPng.src = 'assets/content/img/characters/astesia.gif';
            const puddingLeft = document.querySelector('.skadi')
            puddingLeft.src = 'assets/content/img/characters/pudding-mirror.gif';
            puddingLeft.style.animation = "none";

            const puddingRight = document.querySelector('.skadi-mirror')
            puddingRight.src = 'assets/content/img/characters/pudding.gif';
            puddingRight.style.animation = "none";


        } else if (file.audio === audio3) {
            // change styles for third audio file
            const element = document.querySelector('.audio-queue');
            element.classList.add('slide-in');
        }
    });
}

function startAnimation(progressBar, duration) {
    let progressValue = 0;
    let start;
    const step = (timestamp) => {
        if (!start) start = timestamp; // set start timestamp
        const elapsed = timestamp - start; // calculate time elapsed
        const progress = Math.min(elapsed / duration, 1); // calculate progress between 0 and 1
        progressBar.value = progress * 100; // set progress bar value
        document.querySelector('.percentage').textContent = (progress * 100).toFixed(0) + '%'; // update percentage text
        if (progress < 1) { // request next frame if progress is less than 1
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step); // start animation loop
}