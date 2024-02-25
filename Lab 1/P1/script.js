const videoDurationBar = document.querySelector(".videoDurationBar");
const video = document.querySelector("video");
const playBtn = document.querySelector(".playBtn");
const stopBtn = document.querySelector(".stopBtn");
const slowBtn = document.querySelector(".slowBtn");
const previousBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");
const fastBtn = document.querySelector(".fastBtn");
const muteBtn = document.querySelector(".muteBtn");
const soundLevelBar = document.querySelector(".soundLevelBar");
const duration = document.querySelector(".duration");
const speedLevelBar = document.querySelector(".speedLevelBar");

let soundLevel;
const videoList = [
    "./src/Crazy Frog - Axel F (Official Video).mp4",
    "./src/JavaScript in 100 Seconds.mp4",
    "./src/THIS IS 4K ANIME (Tanjiro vs Hantengu) Demon Slayer Episode 11.mp4"
];
console.log(video);

video.addEventListener('timeupdate', () => {
    videoDurationBar.value = scaleValue(video.currentTime, 0, video.duration, 0, 10000);
    currentTime = video.currentTime.toFixed();
    duration.innerText = `${(currentTime / 60).toFixed()} : ${(currentTime % 60).toFixed()}/ ${(video.duration / 60).toFixed()} : ${(video.duration % 60).toFixed()}`
});

video.addEventListener("loadeddata", () => {
    videoDurationBar.value = scaleValue(video.currentTime, 0, video.duration, 0, 10000);
    currentTime = video.currentTime.toFixed();
    duration.innerText = `${(currentTime / 60).toFixed()} : ${(currentTime % 60).toFixed()}/ ${(video.duration / 60).toFixed()} : ${(video.duration % 60).toFixed()}`
})

videoDurationBar.addEventListener('input', (e) => {
    video.currentTime = scaleValue(videoDurationBar.value, 0, 10000, 0, video.duration);
    console.log(scaleValue(videoDurationBar.value, 0, 10000, video.currentTime, video.duration))
})
playBtn.addEventListener('click', () => {
    video.play();
})

stopBtn.addEventListener('click', () => {
    video.pause();
})

slowBtn.addEventListener('click', () => {
    if (video.playbackRate > 0) {
        video.playbackRate -= 0.25;
    }
    speedLevelBar.value = scaleValue(video.playbackRate, 0, 10, 0, 100);
})

fastBtn.addEventListener('click', () => {
    if (video.playbackRate < 10) {
        video.playbackRate += 0.25;
    }
    speedLevelBar.value = scaleValue(video.playbackRate, 0, 10, 0, 100);

})
previousBtn.addEventListener('click', () => {
    const currentVideo = new URL(video.src);
    if (videoList.indexOf('.' + decodeURIComponent(currentVideo.pathname).slice(9)) <= 0) {
        return;
    }
    video.src = videoList[videoList.indexOf('.' + decodeURIComponent(currentVideo.pathname).slice(9)) - 1];


})
nextBtn.addEventListener('click', () => {
    const currentVideo = new URL(video.src);
    if (videoList.indexOf('.' + decodeURIComponent(currentVideo.pathname).slice(9)) >= videoList.length - 1) {
        return;
    }
    video.src = videoList[videoList.indexOf('.' + decodeURIComponent(currentVideo.pathname).slice(9)) + 1];
})

muteBtn.addEventListener('click', () => {
    (() => muteBtn.value === "Mute" ? muteBtn.value = "Unmute" : muteBtn.value = "Mute")();
    if (video.muted) {
        video.muted = false;
        soundLevelBar.value = soundLevel;

    } else {
        video.muted = true;
        soundLevelBar.value = 0
    }

})

soundLevelBar.addEventListener("input", () => {
    video.volume = scaleValue(soundLevelBar.value, 0, 10000, 0, 1);
    soundLevel = soundLevelBar.value;
})

speedLevelBar.addEventListener("input", () => {
    video.playbackRate = scaleValue(speedLevelBar.value, 0, 100, 0, 10);
})

function scaleValue(value, fromMin, fromMax, toMin, toMax) {
    const ratio = (toMax - toMin) / (fromMax - fromMin);
    return (value - fromMin) * ratio + toMin;
}

