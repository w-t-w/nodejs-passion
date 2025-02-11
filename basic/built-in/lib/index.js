const EventEmitter = require('events').EventEmitter;

const lessons_sum = 100,
    lessons_price = 101,
    lessons_time = 666;

class GeekBang extends EventEmitter {
    constructor() {
        super();
        this.lessons_length = 0;
        const timer_lessons = setInterval(() => {
            this.emit('lessons', {price: Math.floor(Math.random() * lessons_price)});
            this.lessons_length++;
            if (this.lessons_length >= lessons_sum) {
                clearInterval(timer_lessons);
            }
        }, lessons_time);
    }
}

module.exports = GeekBang;
