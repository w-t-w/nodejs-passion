const requester_source = {};

function factory(config) {
    const before = config.before || (data => data),
        then = config.then || (data => data),
        catch_config = config.catch || (error => {
            console.error(error)
        }),
        protocol = config.protocol || 'rpc',
        requester = requester_source[protocol];

    requester.compile(config);

    return async data => {
        try {
            data = before(data);
        } catch (err) {
            catch_config(err);
            return Promise.resolve(null);
        }

        return {
            result: await requester.request(data)
                .then(then)
                .catch(catch_config)
        };
    }
}

factory.createRequester = (name, requester) => {
    requester_source[name] = requester;
};

module.exports = factory;
