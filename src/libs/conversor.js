/**
 * Converts a object into an array
 * @params {Object} object
 * @returns {Array}
 */
function convertObjectToArray(object) {
    return Object.entries(object).map(e => Object.assign(e[1], {key: e[0]}));
}

export {
  convertObjectToArray
}
