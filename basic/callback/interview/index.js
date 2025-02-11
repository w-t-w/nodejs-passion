// const interview = (round, callback) => {
//     const timer = setTimeout(() => {
//         const random = Math.random();
//
//         if (random <= .8) {
//             callback(null, 'success!');
//         } else {
//             const error = new Error('failed!');
//             error.round = round;
//             callback(error);
//         }
//
//         clearTimeout(timer);
//     }, 666);
// };
//
// interview(1, err => {
//     if (err) return console.error(`cry at interview round ${err.round}!`);
//     interview(2, err => {
//         if (err) return console.error(`cry at interview round ${err.round}!`);
//         interview(3, (err, result) => {
//             if (err) return console.error(`cry at interview round ${err.round}!`);
//             console.log(`smile!${result}`);
//         });
//     });
// });

console.log(`NodeJS 【第七课: callback 回调函数实例-面试】部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!`);
