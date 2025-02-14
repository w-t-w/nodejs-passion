const config = require('./config');
const fs = require('fs');
const path = require('path');

const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');

const template = fs.readFileSync(TEMPLATE_DIR, 'utf-8');

module.exports = {
    config,
    template,
};
