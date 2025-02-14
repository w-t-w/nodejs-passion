const Koa = require('koa');
const KoaMount = require('koa-mount');
const factory = require('./factory');
const template_create = require('./template');
const requesters = require('./requesters');

const PORT = 3000;

factory.createRequester('rpc', requesters.rpc);
factory.createRequester('http', requesters.http);

const run = (config_source) => {
    const koa = new Koa();

    Object.entries(config_source).forEach(([pathname, {data: data_config, template: template_config}]) => {
        koa.use(async (ctx, next) => {
            const {request, response} = ctx;

            if (request.url === '/favicon.ico') {
                response.status = 200;
                response.body = '';
                return false;
            }

            await next();
        });

        koa.use(KoaMount(pathname, async ctx => {
            const {request, response} = ctx;
            const {query} = request;

            const data_real_config = eval(data_config);

            const {
                template_name,
                template_string
            } = template_config;

            const template = template_create(template_name, template_string);

            const data_transform = Object.entries(data_real_config).reduce((ret, [config_key, config_value]) => {
                ret[config_key] = factory(config_value);
                return ret;
            }, {});

            const data_result = {};
            await Promise.all(Object.entries(data_transform).map(([result_key, result_value]) => {
                return result_value(query)
                    .then(({result}) => {
                        data_result[result_key] = result;
                        return result;
                    });
            }));

            response.status = 200;

            try {
                response.body = template(data_result);
            } catch (err) {
                response.status = 500;
                response.body = err.stack;
            }
        }));
    });

    koa.listen(PORT, () => {
        console.log(`The client page is running at http://localhost:${PORT}!`);
    });
};

module.exports = run;
