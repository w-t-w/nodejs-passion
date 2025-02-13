const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaMount = require('koa-mount');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const STATIC_DIR = path.join(__dirname, './source');
const TEMPLATE_DIR = path.join(__dirname, './template/index.html');

const koa = new Koa();

koa.use(KoaStatic(STATIC_DIR));

koa.use(KoaMount('/favicon.ico', ctx => {
    const {response} = ctx;
    response.status = 200;
    response.body = '';
    return false;
}));

koa.use(KoaMount('/', ctx => {
    const {response} = ctx;
    response.status = 200;
    response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
}));

koa.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
