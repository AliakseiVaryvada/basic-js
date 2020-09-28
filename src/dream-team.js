const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        return (Array.from(
            (members.filter(word => typeof word === 'string')),
                x => x.replace(/\s/g, '')
                    .substring(0, 1)
                    .toUpperCase())
            .sort())
            .join('');
    } else {
        return false;
    }
};
