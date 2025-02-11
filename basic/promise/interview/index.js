// const interview = (round) => {
//     return new Promise((resolve, reject) => {
//         const timer = setTimeout(() => {
//             const random = Math.random();
//
//             if (random <= .8) {
//                 resolve('success!');
//             } else {
//                 const error = new Error('failed!');
//                 error.round = round;
//                 reject(error);
//             }
//
//             clearTimeout(timer);
//         }, 666);
//     });
// };
//
// interview(1)
//     .then(() => interview(2))
//     .then(() => interview(3))
//     .then(result => {
//         console.log(`smile!${result}`);
//     })
//     .catch(err => {
//         console.error(`cry at interview round ${err.round}!`);
//     });

console.log('NodeJS 《第九课: Promise 异步事件同步调用实例-面试》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
