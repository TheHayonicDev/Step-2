document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.querySelector('.countdown_text');
    let count = 5;

    function updateCountdown() {
        countdownElement.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Done!';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
});
