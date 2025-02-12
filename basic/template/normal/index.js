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
// const template = {
//     templateA: '`${_(\`<p><strong>Hi, I\'m ${black_myth_wukong_loong.name}, ${black_myth_wukong_loong.age} year\'s old, my gender is ${black_myth_wukong_loong.gender ? \'boy\' : \'girl\'}, ${include(\'templateB\', {black_myth_wukong_loong})}</strong></p>\`)}`',
//     templateB: '`<i>I love ${black_myth_wukong_loong.hobby.sports.join(\',\')}!</i>`'
// };
//
// const template_context = vm.createContext({
//     _(val) {
//         if (!val) return '';
//         return val.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;');
//     },
//     include(name, data) {
//         const template_include = template[name];
//         return template_include(data);
//     }
// });
// Object.entries(template).forEach(([key, value]) => {
//     template[key] = vm.runInNewContext(`
//         (function(data) {
//             with(data) {
//                 return ${value};
//             }
//         });
//     `, template_context);
// });
//
// const template_result = template['templateA']({black_myth_wukong_loong: black_myth_wukong});
// console.log('end', template_result);
// // &lt;p&gt;&lt;strong&gt;Hi, I&#39;m Black_Myth_WuKong, 30 year&#39;s old, my gender is boy, &lt;i&gt;I love basketball,computer games,table-tennis!&lt;/i&gt;&lt;/strong&gt;&lt;/p&gt;

console.log('NodeJS 《第二十一课: 普通的 ES6 vm 模板引擎》部分已热情的学习研究完毕!如需重试,将以上代码注释解开即可!');
