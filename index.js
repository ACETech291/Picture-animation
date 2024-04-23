var video = document.getElementById('animatedVideo');
var audio = document.getElementById('audio');
var instructions = document.querySelector('.instructions');

function startInteraction(event) {
    event.preventDefault();
    video.style.filter = 'none';
    video.style.pointerEvents = 'auto';
    video.play();
    audio.play();
    instructions.style.display = 'none';
}

function endInteraction(event) {
    event.preventDefault();
    video.style.filter = 'grayscale(100%)';
    video.style.pointerEvents = 'none';
    audio.pause();
    instructions.style.display = 'block';
}


window.addEventListener('mousedown', startInteraction, { passive: false });
window.addEventListener('mouseup', endInteraction, { passive: false });
window.addEventListener('touchstart', startInteraction, { passive: false });
window.addEventListener('touchend', endInteraction, { passive: false });
