// const path = require('path');
// const fs = require('fs');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const gameKoa = require('./module');
//
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');
//
// const koa = new Koa();
//
// koa.use(KoaMount('/favicon.ico', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.body = '';
//     return false;
// }));
//
// koa.use(KoaMount('/game', gameKoa));
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第十四课: 异步事件同步调用使用 commonjs 模块化导入导出规范,koa 网页程序中直接使用石头、剪刀与布游戏》已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
