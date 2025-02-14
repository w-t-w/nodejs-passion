const uploader = require('./uploader');
const path = require('path');

const name = 'play';
const DATA_SOURCE_DIR = path.resolve(__dirname, `../${name}/source/config/index.js`);
const TEMPLATE_SOURCE_DIR = path.resolve(__dirname, `../${name}/source/template/index.html`);

uploader(
    name,
    DATA_SOURCE_DIR,
    TEMPLATE_SOURCE_DIR,
);
