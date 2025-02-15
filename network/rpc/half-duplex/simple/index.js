// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 3000;
//
// const PACKAGE_BODY_LENGTH = 4;
//
// const lesson_ids = [
//         '136797',
//         '136798',
//         '136799',
//         '136800',
//         '136801',
//         '136803',
//         '136804',
//         '136806',
//         '136807',
//         '136808',
//         '136809',
//         '141994',
//         '143517',
//         '143557',
//         '143564',
//         '143644',
//         '146470',
//         '146569',
//         '146582'
//     ],
//     lesson_ids_length = lesson_ids.length;
//
// let index = 0,
//     id = null;
//
// const socket = new net.Socket();
//
// socket.connect({
//     host: HOST,
//     port: PORT,
//     keepAlive: true
// });
//
// index = Math.floor(Math.random() * lesson_ids_length);
// id = lesson_ids[index];
//
// const encode = (id) => {
//     const body = Buffer.alloc(PACKAGE_BODY_LENGTH);
//     body.writeInt32BE(id);
//     return body;
// };
//
// socket.write(encode(id));
//
// socket.on('data', buffer => {
//     const lesson = buffer.toString().trim();
//     console.log(`课程 ID 为 ${id} 所对应的课程名称为 ${lesson}`);
//     index = Math.floor(Math.random() * lesson_ids_length);
//     id = lesson_ids[index];
//     socket.write(encode(id));
// });

console.log('NodeJS 《第十六课: RPC 调用的通信方式-简易的半双工通信》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
