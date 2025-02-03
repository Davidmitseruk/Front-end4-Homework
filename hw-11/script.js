let timeLeftt = 3600;

function updateTimer() {
    let hours = Math.floor(timeLeftt / 3600);
    let minutes = Math.floor((timeLeftt % 3600) / 60);
    let seconds = timeLeftt % 60;

    document.getElementById("timer").textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeftt === 1800) {
        document.getElementById("message").textContent = "Less than half the time remains!";
    }

    if (timeLeftt > 0) {
        timeLeftt--;
    } else {
        clearInterval(countdown);
    }
}

let countdown = setInterval(updateTimer, 1000);
updateTimer();

// 2

let timeLeft = 30000;
let interval;
const timerDisplay = document.getElementById("timers");
const startBtn = document.getElementById("startBtn");

function startTimer() {
    startBtn.disabled = true; 

    interval = setInterval(() => {
        timeLeft -= 10; 

        
        let seconds = Math.floor(timeLeft / 1000);
        let milliseconds = timeLeft % 1000;
        timerDisplay.textContent = `${seconds}.${milliseconds.toString().padStart(3, '0')}`;

        // Trigger animation at 10 seconds
        if (timeLeft <= 10000) {
           startBtn.disabled = false;
        }

        // Stop when reaching zero
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = "0.000";
            timerDisplay.classList.remove("warning");
            startBtn.disabled = false; // Re-enable the button
        }
    }, 10); // Update every 10 milliseconds
}