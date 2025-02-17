// const cluster = require('cluster');
// const {heart} = require('./lib');
// // const os = require('os');
//
// if (cluster.isMaster) {
//     // for (let i = 0; i < os.cpus().length / 2 + 1; i++) {
//     // for (let i = 0; i < 1; i++) {
//     let heart_result = heart(cluster);
//     // }
//     // 主进程检测子进程异常或者心跳检测: 僵尸子进程监控 exit 退出,即时重启与延时重启都已热情的实现与完成
//     cluster.on('exit', () => {
//         if (heart_result.timer) clearInterval(heart_result.timer);
//         const timer_exit = setTimeout(() => {
//             heart_result = heart(cluster);
//             clearTimeout(timer_exit);
//         }, 666);
//     });
// } else {
//     // 子进程异常捕获机制
//     process.on('uncaughtException', (err) => {
//         console.error(`uncaught exception: ${err}!`);
//         process.exit(1);
//     });
//     // 内存管理监控
//     const timer_memory = setInterval(() => {
//         const memory_usage = process.memoryUsage().rss;
//         // const memory_usage_transform = (memory_usage / 1024 / 1024).toFixed(2);
//         // console.log('memory_usage', `${memory_usage_transform} MB`);
//         if (memory_usage > 700 * 1024 * 1024) {
//             console.error('oom!');
//             process.exit(1);
//             clearInterval(timer_memory);
//         }
//     }, 666);
//     // 心跳检测: 僵尸子进程监控
//     process.on('message', message => {
//         if (message === 'ping!!!') process.send('pong!!!');
//     });
//     require('./src');
// }

console.log('NodeJS 《第二十八课: 性能优化 - 进程的守护与管理》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
console.log('NodeJS 《第三十二课: 性能优化 - 进程的守护与管理: 心跳检测 - 僵尸子进程监控延时重启优化》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
