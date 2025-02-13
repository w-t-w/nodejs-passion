// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const path = require('path');
// const fs = require('fs');
//
// const PORT = 3000;
//
// const leak = [];
//
// const STATIC_DIR = path.join(__dirname, './source');
// const TEMPLATE_DIR = path.join(__dirname, './template/index.html');
//
// const koa = new Koa();
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
//     // 模仿内存溢出的情况
//     leak.push(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第二十五课: 性能优化 - 内存分配策略》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
