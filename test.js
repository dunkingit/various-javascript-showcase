async function t(param){

    console.log("the param t 1", param)
}

async function tt(param){

    console.log("the param t 2", param)
}


let functions = {
    t,
    tt,

}


module.exports = {
    ...functions,
    functions
}
  