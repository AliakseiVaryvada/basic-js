const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let count = 0;
    if(matrix.length > 0) {
        matrix.reduce((acc, val) => acc.concat(val)).forEach((item) => {
            if (item === '^^') {
                count = count + 1
            }
        })
    }
    return count;
};
