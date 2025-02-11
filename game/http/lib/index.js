module.exports = (player_action) => {
    const computer_selections = ['scissor', 'rock', 'paper'];

    if (!computer_selections.includes(player_action)) {
        console.log('请输入准确的石头、剪刀与布手势!【scissor or rock or paper】');
        process.exit(1);
    }

    const selections_length = computer_selections.length;

    const computer_random = Math.floor(Math.random() * selections_length);

    const computer_action = computer_selections[computer_random];

    let player_won_index = computer_random + 1;
    if (player_won_index >= selections_length) player_won_index = 0;

    console.log('第一届石头、剪刀与布游戏大赛正式开始!');
    console.log(`玩家: ${player_action}, 电脑: ${computer_action}`);

    if (player_action === computer_action) {
        console.log('平局!');
        return 0;
    } else if (player_action === computer_selections[player_won_index]) {
        console.log('玩家赢!');
        return 1;
    } else {
        console.log('电脑赢!');
        return -1;
    }
};
