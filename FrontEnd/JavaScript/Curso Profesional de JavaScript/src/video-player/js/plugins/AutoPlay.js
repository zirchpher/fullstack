class AutoPlay {
    run(player) {
        const hasSound = !player.muted;

        // if has sound the video, then mute it
        if (hasSound) {
            player.muted = true;
        }
        player.play();
    }
}

// function AutoPlay() {
//     AutoPlay.prototype.run = function (player) {
//         player.mute();
//         player.play();
//     }
// }

export default AutoPlay;
