const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const playBtn = document.getElementById('play-btn');
const muteBtn = document.getElementById('mute-unmute');
const fullscreenBtn = document.getElementById('fullscreen');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
const progressBar = document.querySelector('.progress-bar');
const progress = document.getElementById('progress');
const content = document.getElementById('layer-content');
const volumeControl = document.getElementById('volume');
const zoom = document.getElementById('zoom');
const controlsContainer = document.querySelector('.controls-container'); 
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');

let controlsTimeout;

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

video.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(video.duration);
});

video.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(video.currentTime);
});

video.addEventListener('ended', () => {
    currentTimeDisplay.textContent = formatTime(0);
});

video.addEventListener('pause', () => {
    playBtn.style.display = 'block';  
    clearTimeout(controlsTimeout);
    showControls(); 
});

video.addEventListener('play', () => {
    playBtn.style.display = 'none';
    controlsTimeout = setTimeout(hideControls, 5000); 
});

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = `<img id="play-pause-icon" src="./assets/svg/stop.svg" alt="">`;  
    } else {
        video.pause();
        playPauseBtn.innerHTML = `<img id="play-pause-icon" src="./assets/svg/play.svg" alt="">`; 
    }
}

function toggleMute() {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? '<img src="./assets/svg/mute.svg" alt="">' : '<img src="./assets/svg/sound.svg" alt="">';
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function back() {
    video.currentTime -= 15;
}

function forward() {
    video.currentTime += 15;
}

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percent}%`;
});

progressBar.addEventListener('click', (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = newTime;
});

function showControls() {
    content.style.opacity = '1';
    controlsContainer.style.opacity = '1';
    clearTimeout(controlsTimeout);
}

function hideControls() {
    controlsTimeout = setTimeout(() => {
        content.style.opacity = '0';
        controlsContainer.style.opacity = '0';
    }, 5000);
}

video.addEventListener('play', hideControls);

video.addEventListener('pause', () => {
    clearTimeout(controlsTimeout);
    showControls();
});

video.addEventListener('mousemove', () => {
    showControls();
    hideControls(); 
});

video.addEventListener('mouseleave', () => {
    if (!video.paused) hideControls();
});

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = `<img id="play-pause-icon" src="./assets/svg/play.svg" alt="">`;
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<img id="play-pause-icon" src="./assets/svg/stop.svg" alt="">';
    }
}

function toggleMute() {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? '<img src="./assets/svg/mute.svg" alt="">' : '<img src="./assets/svg/sound.svg" alt="">';
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        showControls();
        clearTimeout(controlsTimeout);
    } else {
        controlsTimeout = setTimeout(hideControls, 5000);
    }
});

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percent}%`;
});

progressBar.addEventListener('click', (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = newTime;
});

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ' ':
            togglePlayPause();
            break;
        case 'ArrowLeft':
            back();
            break;
        case 'ArrowRight':
            forward();
            break;
        case 'Escape':
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
    }
});

zoom.addEventListener('click', toggleFullscreen);
video.addEventListener('mousemove', showControls);
video.addEventListener('mouseleave', hideControls);
video.addEventListener('play', () => {
    controlsTimeout = setTimeout(hideControls, 5000);
});
video.addEventListener('pause', () => {
    clearTimeout(controlsTimeout);
    showControls();
});

video.addEventListener('click', togglePlayPause);

playPauseBtn.addEventListener('click', togglePlayPause);
playBtn.addEventListener('click', togglePlayPause);
muteBtn.addEventListener('click', toggleMute);

backBtn.addEventListener('click', back);
forwardBtn.addEventListener('click', forward);
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

fullscreenBtn.addEventListener('click', toggleFullscreen);