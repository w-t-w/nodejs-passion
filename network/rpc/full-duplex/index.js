// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 3000;
//
// const PACKAGE_HEADER_LENGTH = 8,
//     PACKAGE_SEQ_LENGTH = 4,
//     PACKAGE_BODY_LENGTH = 4;
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
//     id = null,
//     seq = 0,
//     old_buffer = null,
//     package_length = 0,
//     request_buffer = null;
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
//     const body_length = body.length;
//     header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
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
//     };
// };
//
// const isReceiveComplete = (buffer) => {
//     if (buffer.length <= PACKAGE_HEADER_LENGTH) return 0;
//     const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
//     return body_length + PACKAGE_HEADER_LENGTH;
// };
//
// for (let i = 0; i < 200; i++) {
//     index = Math.floor(Math.random() * lesson_ids_length);
//     id = lesson_ids[index];
//     socket.write(encode(id));
// }
//
// socket.on('data', data => {
//     let buffer = old_buffer && old_buffer.length ? Buffer.concat([old_buffer, data]) : data;
//     while ((buffer && buffer.length) && (package_length = isReceiveComplete(buffer))) {
//         request_buffer = buffer.slice(0, package_length);
//         buffer = buffer.slice(package_length);
//
//         const {seq: seq_result, result} = decode(request_buffer);
//         console.log(`包头为 ${seq_result} 所对应的课程名称为 ${result}`);
//     }
//     old_buffer = buffer;
// });

console.log(`NodeJS 《第十六课: RPC 调用的通信方式-全双工通信》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!`);

