// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const game = require('./lib');
//
// const result_config = {
//     '-1': '你输了!',
//     0: '平局!',
//     1: '你赢了!'
// };
//
// const player_won_code = 1,
//     player_won_sum = 3,
//     player_same_sum = 9;
//
// let player_won_count = 0,
//     player_same_count = 0,
//     last_player_action = null;
//
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');
//
// const app = express();
//
// app.get('/favicon.ico', (request, response) => {
//     response.status(200);
//     response.send('');
//     return false;
// });
//
// app.get('/game', (request, response) => {
//     const {query} = request;
//
//     if (player_won_count >= player_won_sum || player_same_count === player_same_sum) {
//         response.status(500);
//         response.send('你太厉害了!我不跟你玩儿了!');
//         return false;
//     }
//
//     if (player_same_count >= player_won_sum - 1) {
//         player_same_count = player_same_sum;
//         response.status(400);
//         response.send('你作弊!');
//         return false;
//     }
//
//     const {action} = query;
//
//     if (last_player_action && last_player_action === action) {
//         player_same_count++;
//     } else {
//         player_same_count = 0;
//     }
//     last_player_action = action;
//
//     const result = game(action);
//
//     if (result === player_won_code) player_won_count++;
//
//     response.status(200);
//     response.send(result_config[result]);
// });
//
// app.get('/', (request, response) => {
//     response.status(200);
//     response.send(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
// });
//
// app.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS 《第十三课: 简易的使用 commonjs 模块化导入导出规范,express 网页程序中直接使用石头、剪刀与布游戏》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
