// const vm = require('vm');
//
// const black_myth_wukong = {
//     name: 'Black_Myth_WuKong',
//     age: 30,
//     gender: true,
//     hobby: {
//         sports: ['basketball', 'computer games', 'table-tennis']
//     }
// };
//
// const introduce_simple = `<p><strong>Hi, I'm ${black_myth_wukong.name}, ${black_myth_wukong.age} year's old, my gender is ${black_myth_wukong.gender ? 'boy' : 'girl'}, <i>I love ${black_myth_wukong.hobby.sports.join(',')}!</i></strong></p>`;
// console.log('simple', introduce_simple);
//
// const introduce_normal = "`<p><strong>Hi, I'm ${black_myth_wukong.name}, ${black_myth_wukong.age} year's old, my gender is ${black_myth_wukong.gender ? 'boy' : 'girl'}, <i>I love ${black_myth_wukong.hobby.sports.join(',')}!</i></strong></p>`";
// const introduce_normal_result = vm.runInNewContext(introduce_normal, {
//     black_myth_wukong
// });
// console.log('normal', introduce_normal_result);
//
// const introduce_aside = '`<p><strong>Hi, I\'m ${black_myth_wukong.name}, ${black_myth_wukong.age} year\'s old, my gender is ${black_myth_wukong.gender ? \'boy\' : \'girl\'}, <i>I love ${black_myth_wukong.hobby.sports.join(\',\')}!</i></strong></p>`';
// const introduce_aside_result = vm.runInNewContext(introduce_aside, {
//     black_myth_wukong
// });
// console.log('aside', introduce_aside_result);
//
// const introduce_section = `\`<p><strong>Hi, I'm ${black_myth_wukong.name}, ${black_myth_wukong.age} year's old, my gender is ${black_myth_wukong.gender ? 'boy' : 'girl'}, <i>I love ${black_myth_wukong.hobby.sports.join(',')}!</i></strong></p>\``;
// const introduce_section_result = vm.runInNewContext(introduce_section, {
//     black_myth_wukong
// });
// console.log('section', introduce_section_result);
//
// const introduce_transform = '`${_(\`<p><strong>Hi, I\'m ${black_myth_wukong.name}, ${black_myth_wukong.age} year\'s old, my gender is ${black_myth_wukong.gender ? \'boy\' : \'girl\'}, <i>I love ${black_myth_wukong.hobby.sports.join(\',\')}!</i></strong></p>\`)}`';
// const introduce_transform_result = vm.runInNewContext(introduce_transform, {
//     black_myth_wukong,
//     _(val) {
//         if (!val) return '';
//         return val.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;');
//     }
// });
// console.log('transform', introduce_transform_result);
//
// const introduce_include = '`${_(\`<p><strong>Hi, I\'m ${black_myth_wukong.name}, ${black_myth_wukong.age} year\'s old, my gender is ${black_myth_wukong.gender ? \'boy\' : \'girl\'}, ${include(black_myth_wukong)}</strong></p>\`)}`';
// const introduce_include_result = vm.runInNewContext(introduce_include, {
//     black_myth_wukong,
//     _(val) {
//         if (!val) return '';
//         return val.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;');
//     },
//     include(black_myth_wukong_loong) {
//         return `<i>I love ${black_myth_wukong_loong.hobby.sports.join(',')}!</i>`;
//     }
// });
// console.log('include', introduce_include_result);

console.log('NodeJS 《第二十一课: 简易的 ES6 vm 模板引擎》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
