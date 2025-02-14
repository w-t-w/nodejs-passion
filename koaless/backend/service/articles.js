const url = require('url');
const querystring = require('querystring');
const service = require('../server');
const data = require('../data');

const PORT = 4001;

const server = service.http((request, response) => {
    const {query, pathname} = url.parse(request.url);

    if (pathname === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end('');
        return false;
    }

    const {column_id = 0} = querystring.parse(query);

    console.log(`极客时间 play 课程视频页的课程 ID 为 ${column_id}`);

    //...

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(data.articles));
});

server.listen(PORT, () => {
    console.log(`The articles server is running at http://localhost:${PORT}!`);
});
