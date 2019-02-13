/**
 * Converts a object into an array
 */
function convertObjectToArray(object) {
    return Object.entries(object).map(e => Object.assign(e[1], {key: e[0]}));
}

export {
  convertObjectToArray
}
