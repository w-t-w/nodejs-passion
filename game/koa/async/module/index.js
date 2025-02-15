const Koa = require('koa');
const game = require('../lib');

const result_config = {
    '-1': '你输了!',
    0: '平局!',
    1: '你赢了!'
};

const player_won_code = 1,
    player_won_sum = 3,
    player_same_sum = 9;

let player_won_count = 0,
    player_same_count = 0,
    last_player_action = null;

const game_koa = new Koa();

game_koa.use(async (ctx, next) => {
    const {request, response} = ctx;
    const {query} = request;

    if (player_won_count >= player_won_sum || player_same_count === player_same_sum) {
        response.status = 500;
        response.body = '你太厉害了!我不跟你玩儿了!';
        return false;
    }

    if (player_same_count >= player_won_sum - 1) {
        player_same_count = player_same_sum;
        response.status = 400;
        response.body = '你作弊!';
        return false;
    }

    const {action} = query;
    if (last_player_action && last_player_action === action)
        player_same_count++;
    else
        player_same_count = 0;
    last_player_action = action;

    await next();

    if (ctx.player_won) player_won_count++;
});

game_koa.use(async ctx => {
    const {request, response} = ctx;
    const {query} = request;
    const {action} = query;

    await new Promise(resolve => {
        const timer = setTimeout(() => {
            const result = game(action);

            if (result === player_won_code) ctx.player_won = true;

            response.status = 200;
            response.body = result_config[result];
            resolve();
            clearTimeout(timer);
        }, 999);
    });
});

module.exports = game_koa;
