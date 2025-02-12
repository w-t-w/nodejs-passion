// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 3000;
//
// const PACKAGE_HEADER_LENGTH = 4,
//     PACKAGE_BODY_LENGTH = 4;
//
// const lessonIds = [
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
//     lessonIds_length = lessonIds.length;
//
// let index = 0,
//     id = null,
//     seq = 0;
//
// const socket = new net.Socket();
//
// socket.connect({
//     host: HOST,
//     port: PORT,
//     keepAlive: true,
// });
//
// const encode = (id) => {
//     const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
//     header.writeInt32BE(++seq);
//     const body = Buffer.alloc(PACKAGE_BODY_LENGTH);
//     body.writeInt32BE(id);
//     console.log(`包头为 ${seq} 所对应的课程 ID 为 ${id}`);
//     return Buffer.concat([header, body]);
// };
//
// const decode = (buffer) => {
//     const seq = buffer.readInt32BE();
//     const body = buffer.slice(PACKAGE_HEADER_LENGTH);
//     const result = body.toString().trim();
//     return {
//         result,
//         seq
//     }
// };
//
// // setInterval(() => {
// //     index = Math.floor(Math.random() * lessonIds_length);
// //     id = lessonIds[index];
// //     socket.write(encode(id));
// // }, 50);
//
// for (let i = 0; i < 200; i++) {
//     index = Math.floor(Math.random() * lessonIds_length);
//     id = lessonIds[index];
//     socket.write(encode(id));
// }
//
// socket.on('data', buffer => {
//     const {seq: seq_result, result} = decode(buffer);
//     console.log(`包头为 ${seq_result} 所对应的课程名称为 ${result}`);
// });

console.log('NodeJS 《第十六课: RPC 调用的通信方式-普通的半双工通信》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
