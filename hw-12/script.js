class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = new Date(targetDate).getTime();
        this.container = document.querySelector(this.selector);
        if (!this.container) {
            console.error(`CountdownTimer: Element ${this.selector} not found.`);
            return;
        }
        this.start();
    }

    start() {
        this.updateTimer();
        this.interval = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer() {
        const currentTime = new Date().getTime();
        const time = this.targetDate - currentTime;

        if (time < 0) {
            clearInterval(this.interval);
            this.container.innerHTML = "<h2>Countdown Ended!</h2>";
            return;
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.container.querySelector('[data-value="days"]').textContent = days;
        this.container.querySelector('[data-value="hours"]').textContent = hours.toString().padStart(2, '0');
        this.container.querySelector('[data-value="mins"]').textContent = mins.toString().padStart(2, '0');
        this.container.querySelector('[data-value="secs"]').textContent = secs.toString().padStart(2, '0');
    }
}

// Usage Example:
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019')
});
