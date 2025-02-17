const fs = require('fs');
const path = require('path');
const glob = require('glob');

const run = require('./run');

(async () => {
    const BUSINESS_DIR = path.resolve(process.cwd(), './koaless/business');

    glob('./koaless/business/**/config/index.js', async (err, BUSINESS_CONFIG_DIRS) => {
        if (err) return console.error(err);

        const REGEXP_DIR = /business\/(.+)\/config/;

        const run_config = await Promise.all(
            BUSINESS_CONFIG_DIRS.map(async (business_config_dir) => {
                const BUSINESS_DIR_TRANSFORM = REGEXP_DIR.exec(business_config_dir);
                const business_name = BUSINESS_DIR_TRANSFORM[1];

                const DATA_DIR = path.resolve(BUSINESS_DIR, business_name, 'config/index.js');
                const TEMPLATE_DIR = path.resolve(BUSINESS_DIR, business_name, 'template/index.tpl');

                const data = await new Promise((resolve, reject) => {
                    fs.readFile(DATA_DIR, 'utf-8', (err, data) => {
                        err ? reject(err) : resolve(data);
                    });
                });

                const template_string = await new Promise((resolve, reject) => {
                    fs.readFile(TEMPLATE_DIR, 'utf-8', (err, data) => {
                        err ? reject(err) : resolve(data);
                    });
                });

                return {
                    [`/${business_name}`]: {
                        data,
                        template: {
                            template_name: TEMPLATE_DIR,
                            template_string,
                        }
                    }
                };
            }));

        const run_result = run_config.reduce((ret, config) => {
            return Object.assign({}, ret, config);
        }, {});

        run(run_result);
    });
})();

// console.log('NodeJS 《第二十九课: koaless 云函数》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
