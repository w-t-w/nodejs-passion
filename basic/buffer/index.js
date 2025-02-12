// const protobuf = require('protocol-buffers');
// const fs = require('fs');
// const path = require('path');
//
// const PROTO_DIR = path.resolve(__dirname, './proto/black_myth_wukong.proto');
//
// const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');
//
// const buffer_first = Buffer.alloc(4);
// const buffer_aside = Buffer.from('Hello GeekBang');
// const buffer_main = Buffer.from([1, 2, 3, 4]);
//
// console.log(buffer_first);
// console.log(buffer_aside);
// console.log(buffer_main);
//
// buffer_first.writeInt8(32, 3);
// console.log(buffer_first);
// // buffer_first.writeInt8(512, 3);
// // console.log(buffer_first);
// buffer_main.writeInt16BE(512, 2);
// console.log(buffer_main);
// buffer_main.writeInt16LE(512, 2);
// console.log(buffer_main);
//
// const black_myth_wukong = {
//     name: 'Black Myth WuKong',
//     age: 22,
//     gender: true,
//     hobby: {
//         sports: ['basketball', 'computer games-black myth wukong', 'table-tennis'],
//         subjects: ['Math', 'English']
//     }
// };
//
// const encode_schema = schema.Black_Myth_WuKong.encode(black_myth_wukong);
// console.log(encode_schema);
// const decode_object = schema.Black_Myth_WuKong.decode(encode_schema);
// console.log(decode_object);

console.log('NodeJS 《第十五课: Buffer protocol-buffers 使用》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
