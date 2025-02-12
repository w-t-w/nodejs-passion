// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const path = require('path');
// const socket = require('./lib');
// const template_create = require('./template');
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
// koa.use(KoaMount('/', async ctx => {
//     const {request, response} = ctx;
//
//     const {query: {column_id = 0}} = request;
//
//     const template = template_create(TEMPLATE_DIR);
//
//     const result = await new Promise((resolve, reject) => {
//         socket.write({
//             column_id
//         }, (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     response.status = 200;
//     response.body = template(result);
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第十八课: 极客时间 detail 课程详情页》已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
