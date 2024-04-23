var video = document.getElementById('animatedVideo');
var audio = document.getElementById('audio');
var instructions = document.querySelector('.instructions');

function startInteraction() {
    video.style.filter = 'none';
    video.play();
    audio.play();
    instructions.style.display = 'none';
}

function endInteraction() {
    video.style.filter = 'grayscale(100%)';
    audio.pause();
    instructions.style.display = 'block';
}

window.addEventListener('mousedown', startInteraction);
window.addEventListener('mouseup', endInteraction);
window.addEventListener('touchstart', startInteraction);
window.addEventListener('touchend', endInteraction);
