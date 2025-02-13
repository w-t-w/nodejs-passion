const heart_break_code = 3;
let heart_count = 0;

const heart = (cluster) => {
    let worker = cluster.fork();

    let timer_heart = setInterval(() => {
        worker.send('ping!!!');
        // console.log('ping!!!');
        heart_count++;
        if (heart_count >= heart_break_code) {
            heart_count = 0;
            process.kill(worker.process.pid);
            clearInterval(timer_heart);
            timer_heart = null;
        }
    }, 666);

    worker.on('message', message => {
        if (message === 'pong!!!') {
            // console.log('pong!!!');
            heart_count--;
        }
    });

    return {
        worker,
        timer: timer_heart,
    };
};

module.exports = heart;
