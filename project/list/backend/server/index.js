const path = require('path');
const fs = require('fs');
const protobuf = require('protocol-buffers');
const rpc = require('./lib');
const columns = require('./data/columns');

const sort_config = {
    0: (a, b) => b.id - a.id,
    1: (a, b) => b.id - a.id,
    2: (a, b) => b.sub_count - a.sub_count,
    3: (a, b) => b.column_price - a.column_price,
};

const PORT = 4000;

const PROTO_DIR = path.resolve(__dirname, '../proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const tcp_server = rpc({
    requestSchema: schema.ListRequest,
    responseSchema: schema.ListResponse
});

const server = tcp_server.createServer((request, response) => {
    const {body: {sort = 1, filter = 0}} = request;

    console.log(`课程列表的排序条件: ${sort}`);
    console.log(`课程列表的筛选条件: ${filter}`);

    //...

    response.end({
        columns: columns.sort(sort_config[sort]).filter(item => filter ? item.type === filter : item)
    });
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});


