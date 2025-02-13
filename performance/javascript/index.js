// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const path = require('path');
// const fs = require('fs');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const koa = new Koa();
//
// const file = fs.readFileSync(TEMPLATE_DIR);
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/favicon.ico', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.body = '';
//     return false;
// }));
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.type = 'html';
//     response.body = file;
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第二十四课: 性能优化 - javascript 代码优化》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
