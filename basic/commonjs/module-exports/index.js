// console.log('commonjs require start!');
// const lib = require('./lib');
// console.log('commonjs require end!');
//
// /**
//  * {
//  *     name: 'black_myth_wukong_monkey_king',
//  *     age: 20,
//  *     gender: false,
//  *     hobby: {
//  *         sports: ['basketball', 'black_myth_wukong', 'football', 'running'],
//  *         subjects: {
//  *              math(a, b) {
//  *                  return Math.pow(a, b);
//  *              }
//  *         }
//  *     }
//  * }
//  */
// console.log(lib);
// console.log(lib.name);                              // 'black_myth_wukong_monkey_king'
// console.log(lib.age);                               // 20
// console.log(lib.gender ? 'male' : 'female');        // 'female'
// console.log(lib.hobby.sports.join(','));            // 'basketball, black_myth_wukong, football, running'
// console.log(lib.hobby.subjects.math(100, 4)); // 100000000
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
//      *     name: 'black_myth_wukong_wtw',
//      *     age: 27,
//      *     gender: false,
//      *     hobby: {
//      *         sports: ['basketball', 'black_myth_wukong', 'football', 'running', 'volleyball'],
//      *         subjects: {
//      *              math(a, b) {
//      *                  return a - b;
//      *              }
//      *         }
//      *     }
//      * }
//      */
//     console.log(lib);
//     console.log(lib.name);                              // 'black_myth_wukong_wtw'
//     console.log(lib.age);                               // 27
//     console.log(lib.gender ? 'male' : 'female');        // 'female'
//     console.log(lib.hobby.sports.join(','));            // 'basketball, black_myth_wukong, football, running, volleyball'
//     console.log(lib.hobby.subjects.math(100, 4)); // 96
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

console.log('NodeJS 《第三课: commonjs 模块化导入导出规范-module.exports》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
