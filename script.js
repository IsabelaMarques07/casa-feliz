document.addEventListener('DOMContentLoaded', function() {
    const cardContainers = document.querySelectorAll('.card-container');
    cardContainers.forEach(function(cardContainer) {
        cardContainer.addEventListener('click', function() {
            cardContainer.classList.toggle('flipped');
        });
    });
});