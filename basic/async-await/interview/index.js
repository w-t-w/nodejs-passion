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
// (async () => {
//     try {
//         await interview(1);
//         await interview(2);
//         const result = await interview(3);
//         console.log(`smile!${result}`);
//     } catch (error) {
//         console.error(`cry at interview round ${error.round}!`);
//     }
// })();

console.log(`NodeJS 《Async/Await 异步事件同步调用实例-面试》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!`);
