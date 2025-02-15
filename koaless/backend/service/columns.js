const fs = require('fs');
const path = require('path');
const protobuf = require('protocol-buffers');
const service = require('../server');
const data = require('../data');

const PORT = 4000;

const PROTO_DIR = path.resolve(__dirname, '../proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const server = service.rpc({
    request_schema: schema.PlayRequest,
    response_schema: schema.PlayResponse,
});

const tcp_server = server.createServer((request, response) => {
    const {body: {column_id = 0}} = request;

    console.log(`极客时间 play 课程视频页的课程 ID 为 ${column_id}`);

    //...

    response.end({
        column: data.columns[1]
    });
});

tcp_server.listen(PORT, () => {
    console.log(`The columns server is running at http://localhost:${PORT}!`);
});


