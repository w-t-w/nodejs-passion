// const run = require('./run');
// const fs = require('fs');
// const path = require('path');
//
// (async () => {
//     const DATA_DIR = path.resolve(process.cwd(), './koaless/business/play/data.js');
//     const TEMPLATE_DIR = path.resolve(process.cwd(), './koaless/business/play/template.js');
//
//     const data = await new Promise((resolve, reject) => {
//         fs.readFile(DATA_DIR, 'utf-8', (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     const template_string = await new Promise((resolve, reject) => {
//         fs.readFile(TEMPLATE_DIR, 'utf-8', (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     run({
//         '/play': {
//             data,
//             template: {
//                 template_name: TEMPLATE_DIR,
//                 template_string,
//             },
//         }
//     });
// })();

console.log('NodeJS 《第二十九课: koaless 云函数》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
