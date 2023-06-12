document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.querySelector('.countdown_text');
    const continueButton = document.getElementById('continueButton');

    let count = 5;

    function updateCountdown() {
        countdownElement.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Done!';
            continueButton.classList.remove('disableInteraction');
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    continueButton.classList.add('disableInteraction');
});