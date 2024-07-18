import { burgerMenu } from "./burger";

burgerMenu();
playVideo();

function playVideo(): void {
    const playBtn: HTMLElement | null = document.getElementById('play_button');
    const video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;

    if (!playBtn || !video) return;

    const togglePlay = () => {
        if (video.paused) {
            video.play();
            playBtn.style.opacity = '0';
        } else {
            video.pause();
            playBtn.style.opacity = '1';
        }
    };

    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
}
