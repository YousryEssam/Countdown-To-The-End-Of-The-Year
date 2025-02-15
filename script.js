const currentYear = new Date().getFullYear();
function updateCountdown() {
    const now = new Date();
    const endOf2024 = new Date(`December 31, ${currentYear} 23:59:59`);
    const timeDifference = endOf2024 - now;

    if (timeDifference < 0) {
        $('.sf-countdown #days').text("0");
        $('.sf-countdown #hours').text("0");
        $('.sf-countdown #minutes').text("0");
        $('.sf-countdown #seconds').text("0");
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    $('.sf-countdown #days').text(days);
    $('.sf-countdown #hours').text(hours);
    $('.sf-countdown #minutes').text(minutes);
    $('.sf-countdown #seconds').text(seconds);
}

$(document).ready(function() {
    updateCountdown();
    var yearSpan = document.getElementById('currentYear');
    yearSpan.innerHTML = currentYear;
    setInterval(updateCountdown, 1000);
});