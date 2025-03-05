class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timer = document.querySelector(selector);
        this.start();
    }
    start() {
        this.updateTimer();
        setInterval(() => this.updateTimer(), 1000);
    }
    updateTimer() {
        const currentTime = new Date().getTime();
        const time = this.targetDate - currentTime;
        
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        
        this.timer.querySelector('[data-value="days"]').textContent = days;
        this.timer.querySelector('[data-value="hours"]').textContent = hours;
        this.timer.querySelector('[data-value="mins"]').textContent = mins;
        this.timer.querySelector('[data-value="secs"]').textContent = secs;
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 1, 2025 00:00:00'),
});
