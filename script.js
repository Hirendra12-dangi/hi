document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = "Yay! I'm so happy! 💖";
});

document.getElementById('noBtn').addEventListener('mouseenter', function() {
    const noBtn = document.getElementById('noBtn');
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const maxX = cardRect.width - noBtn.offsetWidth;
    const maxY = cardRect.height - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
