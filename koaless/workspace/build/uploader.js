const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const memory_fs = require('memory-fs');

const uploader = (name, data_source_dir, template_source_dir) => {
    const SOURCE_DIR = path.resolve(process.cwd(), './koaless/business');
    const MAIN_DIR = path.resolve(SOURCE_DIR, name);
    const TEMPLATE_DIR = path.resolve(MAIN_DIR, './template.js');
    const DATA_DIR = path.resolve(MAIN_DIR, './data.js');

    fs.createReadStream(template_source_dir, 'utf-8').pipe(fs.createWriteStream(TEMPLATE_DIR, 'utf-8'));

    mkdirp.sync(MAIN_DIR);

    const compiler = webpack({
        mode: 'development',
        devtool: false,
        target: 'node',
        entry: data_source_dir,
        output: {
            path: `/${name}`,
            filename: 'data.js',
        },
        module: {
            rules: [{
                test: /\.proto$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'text-loader',
                }]
            }]
        }
    });

    const mfs = new memory_fs();
    compiler.outputFileSystem = mfs;

    compiler.run((err) => {
        if (err) return console.error(err);
        const context_info = mfs.readFileSync(`/${name}/data.js`, 'utf-8');
        fs.writeFileSync(DATA_DIR, context_info, 'utf-8');
    })
};

module.exports = uploader;
