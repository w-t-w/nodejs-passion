// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
// const {graphqlHTTP} = require('koa-graphql');
// const path = require('path');
// const fs = require('fs');
// const schema = require('./schema');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
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
// koa.use(KoaMount('/api', graphqlHTTP({
//     schema,
// })));
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第二十课: 极客时间 video 课程视频页》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
