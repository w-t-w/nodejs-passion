const http = require('http');
const fs = require('fs');
const path = require('path');

// 内存管理监控
// const leak = [];

const PORT = 3000;

const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');

const server = http.createServer((request, response) => {
    // 测试异常捕获机制
    // console.log(window.location.href);
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 内存管理监控
    // leak.push(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
    response.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
    // 心跳检测: 僵尸子进程监控
    // while (true) {
    // }
});
