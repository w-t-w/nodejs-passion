// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const {renderToString} = require('react-dom/server');
// const path = require('path');
// const App = require('../build/ssr_index');
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
// const template = template_create(TEMPLATE_DIR);
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
// koa.use(KoaMount('/api', async ctx => {
//     const {request, response} = ctx;
//     const {query: {sort, filter}} = request;
//
//     const result = await new Promise((resolve, reject) => {
//         socket.write({
//             sort: isNaN(sort) ? 0 : +sort,
//             filter: isNaN(filter) ? 0 : +filter,
//         }, (err, result) => {
//             err ? reject(err) : resolve(result);
//         });
//     });
//
//     response.status = 200;
//     response.type = 'application/json';
//     response.body = result;
// }));
//
// koa.use(KoaMount('/', async ctx => {
//     const {request, response} = ctx;
//     const {query: {sort = 0, filter = 0}} = request;
//
//     const result = await new Promise((resolve, reject) => {
//         socket.write({
//             sort: +(sort || 0),
//             filter: +(filter || 0),
//         }, (err, result) => {
//             err ? reject(err) : resolve(result);
//         });
//     });
//
//     response.status = 200;
//     response.body = template({
//         react_list_string: renderToString(App(result)),
//         react_list_columns: result,
//         react_list_sort: sort,
//         react_list_filter: filter,
//     });
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第二十二课: 极客时间 list 课程列表页》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
