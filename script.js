document.addEventListener("DOMContentLoaded", () => {
    const timeInput = document.getElementById("timeInput");
    const startButton = document.getElementById("startButton");
    const resetButton = document.getElementById("resetButton");
    const timerDisplay = document.getElementById("timerDisplay");

    let countdown;
    let timeLeft;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    function startTimer() {
        clearInterval(countdown);
        timeLeft = parseInt(timeInput.value);
        if(isNaN(timeLeft || timeLeft <= 0)) {
            alert("Por favor,  insira um valor válido de tempo!");
            return;
        }

        timerDisplay.textContent = formatTime(timeLeft);
        countdown = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(countdown);
                timerDisplay.textContent = "Tempo Acabou";
                alert("O tempo acabou")
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(countdown);
        timerDisplay.textContent = "00:00";
        timeInput.value = "";
    }

    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);
})