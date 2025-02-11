console.log('commonjs requiring!');

exports.name = 'black_myth_wukong';
exports.age = 31;
exports.gender = true;
exports.hobby = {
    sports: ['basketball', 'computer games'],
    subjects: {
        math(a, b) {
            return a + b;
        }
    }
};

const timer_aside = setTimeout(() => {
    /**
     * {
     *     name: 'black_myth_wukong_wtw',
     *     age: 27,
     *     gender: false,
     *     hobby: {
     *         sports: ['basketball', 'computer games', 'volleyball'],
     *         subjects: {
     *              math(a, b) {
     *                  return a - b;
     *              }
     *         }
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                              // 'black_myth_wukong_wtw'
    console.log(exports.age);                               // 27
    console.log(exports.gender ? 'male' : 'female');        // 'female'
    console.log(exports.hobby.sports.join(','));            // 'basketball, computer games, volleyball'
    console.log(exports.hobby.subjects.math(100, 4)); // 96

    exports.name = 'black_myth_wukong_destined';
    exports.age = 24;
    exports.gender = true;
    exports.hobby.sports = ['black_myth_wukong', 'table tennis'];
    exports.hobby.subjects.math = function (a, b) {
        return a * b
    };

    clearTimeout(timer_aside);
}, 666);

const timer_end = setTimeout(() => {
    /**
     * {
     *     name: 'black_myth_wukong_ywk',
     *     age: 23,
     *     gender: false,
     *     hobby: {
     *         sports: ['black_myth_wukong', 'table tennis', 'tennis'],
     *         subjects: {
     *              math(a, b) {
     *                  return a / b;
     *              }
     *         }
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                              // 'black_myth_wukong_ywk'
    console.log(exports.age);                               // 23
    console.log(exports.gender ? 'male' : 'female');        // 'female'
    console.log(exports.hobby.sports.join(','));            // 'black_myth_wukong, table tennis, tennis'
    console.log(exports.hobby.subjects.math(100, 4)); // 25

    clearTimeout(timer_end);
}, 1555);
