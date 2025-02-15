const path = require('path');

const config = {
    column: {
        protocol: 'rpc',
        ip: '127.0.0.1',
        port: 4000,
        timeout: 6666,
        protobuf_file: require('../proto/columns.proto'),
        request_struct: 'PlayRequest',
        response_struct: 'PlayResponse',
        before: data => data,
        then: ({column}) => column,
        catch: err => {
            console.error(err);
        }
    },
    articleList: {
        protocol: 'http',
        url: 'http://127.0.0.1:4001',
        before: data => data,
        then: data => JSON.parse(data).data.list,
        catch: err => {
            console.error(err);
        }
    }
};

module.exports = config;
