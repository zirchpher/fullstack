import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('video');
const buttonTogglePlay = document.querySelector('#button-toggle-play');
const buttonToggleVolume = document.querySelector('#button-toggle-volume');

const player = new MediaPlayer({
    video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ],
});

buttonTogglePlay.onclick = () => player.togglePlay();
buttonToggleVolume.onclick = () => player.toggleVolume();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .catch(error => {
            console.log(error.message);
        });
}