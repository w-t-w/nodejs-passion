const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const glob = require('glob');
const memory_fs = require('memory-fs');
const copy_dir = require('copy-dir');

const uploader = async () => {
    const REGEXP_MATCH_NAME = /workspace\/(.+)\/source/;
    const SOURCE_DIR = path.resolve(process.cwd(), './koaless/business');
    const WORKSPACE_DIRS = await glob.sync('./koaless/workspace/**/source/config/index.js');

    return new Promise((resolve, reject) => {

        WORKSPACE_DIRS.forEach((workspace_dir) => {
            const WORKSPACE_TRANSFORM = REGEXP_MATCH_NAME.exec(workspace_dir);
            const workspace_base_dir = WORKSPACE_TRANSFORM[0];
            const workspace_name = WORKSPACE_TRANSFORM[1];
            const MAIN_DIR = path.resolve(SOURCE_DIR, workspace_name);
            const WORKSPACE_SOURCE_DIR = path.resolve(process.cwd(), 'koaless', workspace_base_dir);

            const WORKSPACE_TEMPLATE_DIR = path.resolve(WORKSPACE_SOURCE_DIR, 'template/index.html');
            const TEMPLATE_DIR = path.resolve(MAIN_DIR, './template');

            const WORKSPACE_CONFIG_DIR = path.resolve(WORKSPACE_SOURCE_DIR, 'config/index.js');
            const CONFIG_DIR = path.resolve(MAIN_DIR, './config');

            const WORKSPACE_STATIC_DIR = path.resolve(WORKSPACE_SOURCE_DIR, 'static');
            const STATIC_DIR = path.resolve(MAIN_DIR, './source/static');

            mkdirp.sync(MAIN_DIR);
            mkdirp.sync(TEMPLATE_DIR);
            mkdirp.sync(CONFIG_DIR);
            mkdirp.sync(STATIC_DIR);
            // if (!fs.existsSync(TEMPLATE_DIR)) fs.mkdirSync(TEMPLATE_DIR);
            // if (!fs.existsSync(CONFIG_DIR)) fs.mkdirSync(CONFIG_DIR);

            fs.createReadStream(WORKSPACE_TEMPLATE_DIR, 'utf-8').pipe(fs.createWriteStream(`${TEMPLATE_DIR}/index.tpl`, 'utf-8'));
            copy_dir.sync(WORKSPACE_STATIC_DIR, STATIC_DIR);

            const compiler = webpack({
                mode: 'development',
                devtool: false,
                target: 'node',
                entry: WORKSPACE_CONFIG_DIR,
                output: {
                    publicPath: '.',
                    path: `/${workspace_name}`,
                    filename: `${workspace_name}.js`
                },
                module: {
                    rules: [{
                        test: /\.proto$/,
                        use: [{
                            loader: 'text-loader',
                        }]
                    }]
                }
            });

            const mfs = new memory_fs();
            compiler.outputFileSystem = mfs;

            compiler.run(err => {
                if (err) return console.error(err);
                const context = mfs.readFileSync(`/${workspace_name}/${workspace_name}.js`, 'utf-8');
                fs.writeFileSync(`${CONFIG_DIR}/index.js`, context, 'utf-8');
                resolve('Upload Complete!');
            });
        });
    });
};

module.exports = uploader;
