// console.log('commonjs require start!');
// const lib = require('./lib');
// console.log('commonjs require end!');
//
// /**
//  * {
//  *     name: 'black_myth_wukong',
//  *     age: 31,
//  *     gender: true,
//  *     hobby: {
//  *         sports: ['basketball', 'computer games'],
//  *         subjects: {
//  *              math(a, b) {
//  *                  return a + b;
//  *              }
//  *         }
//  *     }
//  * }
//  */
// console.log(lib);
// console.log(lib.name);                              // 'black_myth_wukong'
// console.log(lib.age);                               // 31
// console.log(lib.gender ? 'male' : 'female');        // 'male'
// console.log(lib.hobby.sports.join(','));            // 'basketball, computer games'
// console.log(lib.hobby.subjects.math(100, 4)); // 104
//
// lib.name = 'black_myth_wukong_wtw';
// lib.age = 27;
// lib.gender = false;
// lib.hobby.sports.push('volleyball');
// lib.hobby.subjects.math = function (a, b) {
//     return a - b
// };
//
// const timer_main = setTimeout(() => {
//     /**
//      * {
//      *     name: 'black_myth_wukong_destined',
//      *     age: 24,
//      *     gender: true,
//      *     hobby: {
//      *         sports: ['black_myth_wukong', 'table tennis'],
//      *         subjects: {
//      *              math(a, b) {
//      *                  return a * b;
//      *              }
//      *         }
//      *     }
//      * }
//      */
//     console.log(lib);
//     console.log(lib.name);                              // 'black_myth_wukong_destined'
//     console.log(lib.age);                               // 24
//     console.log(lib.gender ? 'male' : 'female');        // 'male'
//     console.log(lib.hobby.sports.join(','));            // 'black_myth_wukong, table tennis'
//     console.log(lib.hobby.subjects.math(100, 4)); // 400
//
//     lib.name = 'black_myth_wukong_ywk';
//     lib.age = 23;
//     lib.gender = false;
//     lib.hobby.sports.push('tennis');
//     lib.hobby.subjects.math = function (a, b) {
//         return a / b
//     };
//
//     clearTimeout(timer_main);
// }, 888);

console.log('NodeJS 《第三课: commonjs 模块化导入导出规范-exports》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
