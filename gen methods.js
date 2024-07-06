let getNumbersFromString = (param) => Array.from(param).map((cu, ind) => parseInt(/\d*/ig.exec(cu)[0])).filter(cu => cu >= 0)
let countDesiredElementInArray = (arr, search) => arr.filter(cu => cu == search || cu == Number(search)).length
let binaryToNumber = (param) => parseInt(param, 2)
let getBinary = (param) => param.toString(2)
let outputArray = (arr) => arr.forEach(cu => console.log(cu))
let outputTable = (param) => console.table(Object.entries(param))
let outputOwnArray = (arr) => arr.forEach((cu, ind) => console.log(`index ${ind} = value ${cu}`))
let stringy = (param) => JSON.stringify(param, null, 2)


let functions = {
    getNumbersFromString,
    countDesiredElementInArray,
    binaryToNumber,
    getBinary,
    outputArray,
    outputTable,
    outputOwnArray,
    stringy
}

module.exports = {
    ...functions,
    functions
};