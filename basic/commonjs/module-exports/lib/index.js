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
     *     name: 'black_myth_wukong',
     *     age: 31,
     *     gender: true,
     *     hobby: {
     *         sports: ['basketball', 'computer games'],
     *         subjects: {
     *              math(a, b) {
     *                  return a + b;
     *              }
     *         }
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                              // 'black_myth_wukong'
    console.log(exports.age);                               // 31
    console.log(exports.gender ? 'male' : 'female');        // 'male'
    console.log(exports.hobby.sports.join(','));            // 'basketball, computer games'
    console.log(exports.hobby.subjects.math(100, 4)); // 104

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
     *     name: 'black_myth_wukong_destined',
     *     age: 24,
     *     gender: true,
     *     hobby: {
     *         sports: ['black_myth_wukong', 'table tennis'],
     *         subjects: {
     *              math(a, b) {
     *                  return a * b;
     *              }
     *         }
     *     }
     * }
     */
    console.log(exports);
    console.log(exports.name);                              // 'black_myth_wukong_destined'
    console.log(exports.age);                               // 24
    console.log(exports.gender ? 'male' : 'female');        // 'male'
    console.log(exports.hobby.sports.join(','));            // 'black_myth_wukong, table tennis'
    console.log(exports.hobby.subjects.math(100, 4)); // 400

    clearTimeout(timer_end);
}, 1555);

module.exports = {
    name: 'black_myth_wukong_monkey_king',
    age: 20,
    gender: false,
    hobby: {
        sports: ['basketball', 'black_myth_wukong', 'football', 'running'],
        subjects: {
            math(a, b) {
                return Math.pow(a, b);
            }
        }
    }
};
