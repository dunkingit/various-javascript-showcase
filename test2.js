async function p(param){

    console.log("phe param p 1", param)
}

async function pp(param){

    console.log("phe param p 2", param)
}


let functions = {
    p,
    pp,

}

module.exports = {
    ...functions
}
  