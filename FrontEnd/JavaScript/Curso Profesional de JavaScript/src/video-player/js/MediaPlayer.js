class MediaPlayer {
    constructor(props) {
        this.media = props.video;
        this.plugins = props.plugins || [];

        this._initPlugins();
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    toggleVolume() {
        const isMuted = this.media.muted;
        if (isMuted) {
            this.unmute();
        } else {
            this.mute();
        }
    }

    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        };

        this.plugins.forEach((plugin) => {
            plugin.run(player);
        });
    }
}

// function MediaPlayer(props) {
//     this.media = props.video;
//     console.log(this.media);
//     this.plugins = props.plugin || [];

//     this._initPlugins();
// }

// MediaPlayer.prototype.play = function () {
//     this.media.play();
// }

// MediaPlayer.prototype.pause = function () {
//     this.media.pause();
// }

// MediaPlayer.prototype.togglePlay = function () {
//     if (this.media.paused) {
//         this.play();
//     }
//     else {
//         this.pause();
//     }
// };

// MediaPlayer.prototype.mute = function () {
//     this.media.muted = true;
// }

// MediaPlayer.prototype.unmute = function () {
//     this.media.muted = false;
// }

// MediaPlayer.prototype._initPlugins = function () {
//     console.log("Se inició el _initPlugins");
//     this.plugins.forEach(plugin => {
//         plugin.run(this);
//     });
// }

export default MediaPlayer;
