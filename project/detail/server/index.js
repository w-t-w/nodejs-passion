const path = require('path');
const fs = require('fs');
const protobuf = require('protocol-buffers');
const rpc = require('./lib');
const columns = require('./data/columns');

const PORT = 4000;

const PROTO_DIR = path.resolve(process.cwd(), './project/detail/proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const tcp_server = rpc({
    request_schema: schema.ColumnRequest,
    response_schema: schema.ColumnResponse
});

const server = tcp_server.createServer((request, response) => {
    const {body: {column_id}} = request;

    console.log(`课程详情 ID 为 ${column_id}`);

    //...

    response.end({
        columns: columns[0],
        recommend_columns: [columns[1], columns[2]],
    });
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
