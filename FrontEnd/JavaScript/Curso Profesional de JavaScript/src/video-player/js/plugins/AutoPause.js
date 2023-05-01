class AutoPause {
    constructor() {
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;

        const theVideo = player.media;
        const options = { threshold: 0.25 }

        // Pause the video if the user isn't watching it
        const observer = new IntersectionObserver(this.handleIntersection, options);
        observer.observe(theVideo);

        // Pause the video when the user is not watching it
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.player.play();
            }
            else {
                this.player.pause();
            }
        });
    }

    handleVisibilityChange() {
        const isTheUserOnThePage = document.visibilityState === 'visible';
        if (isTheUserOnThePage) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
}

export default AutoPause;