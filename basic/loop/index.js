// const loop = {
//     queue: [],
//     timeoutQueue: [],
//     eventsQueue: [],
//     init() {
//         while (this.queue.length) {
//             const callback = this.queue.shift();
//             callback();
//         }
//         // setInterval(() => this.init(), 66);
//         setInterval(this.init.bind(this), 66);
//     },
//     addListener(callback) {
//         this.queue.push(callback);
//     }
// };
//
// loop.init();
//
// loop.addListener(() => {
//     console.log('first queue anyone!');
// });
//
// const timer_main = setTimeout(() => {
//     console.log('second queue anytime!');
//     clearTimeout(timer_main);
// }, 666);
//
// const timer_aside = setTimeout(() => {
//     console.log('third queue anymore!');
//     clearTimeout(timer_aside);
// }, 1666);
//
// const timer_end = setTimeout(() => {
//     console.log('final queue universal!');
//     clearTimeout(timer_end);
// }, 2888);

console.log('NodeJS 《第八课: 事件循环机制》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
