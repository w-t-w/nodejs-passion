// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');
// const querystring = require('querystring');
// const game = require('./lib');
//
// const result_config = {
//     '-1': '你输了!',
//     0: '平局!',
//     1: '你赢了!'
// };
//
// const player_won_code = 1,
//     player_same_sum = 9,
//     player_won_sum = 3;
//
// let player_won_count = 0,
//     player_same_count = 0,
//     last_player_action = null;
//
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');
//
// const server = http.createServer((request, response) => {
//     const {pathname, query} = url.parse(request.url);
//
//     if (pathname === '/favicon.ico') {
//         response.writeHead(200);
//         response.end('');
//         return false;
//     }
//
//     if (pathname === '/game') {
//         const {action} = querystring.parse(query);
//
//         if (player_won_count === player_won_sum || player_same_count === player_same_sum) {
//             response.writeHead(500);
//             response.end('你太厉害了!我不跟你玩儿了!');
//             return false;
//         }
//
//         if (player_same_count >= player_won_sum - 1) {
//             player_same_count = player_same_sum;
//             response.writeHead(400);
//             response.end('你作弊!');
//             return false;
//         }
//
//         if (last_player_action && last_player_action === action) {
//             player_same_count++;
//         } else {
//             player_same_count = 0;
//         }
//         last_player_action = action;
//
//         const result = game(action);
//
//         if (result === player_won_code) player_won_count++;
//
//         response.writeHead(200, {'Content-Type': 'application/json'});
//         response.end(result_config[result]);
//     }
//
//     if (pathname === '/') {
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
//     }
// });
//
// server.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第十二课: 使用 commonjs 模块化导入导出规范化,HTTP 网页程序中直接使用石头、剪刀与布游戏》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
