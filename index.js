//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const d = require("./my debugger.js")
const cae = require('./count all elements.js')
const cdo = require('./custom date object.js')
const gm = require('./gen methods.js')
const i = require('./index.js')
const mfs = require('../myflexertap/macrodroid flex special.js')
const md = require('./my debugger.js')
const ogm = require('./os get memory.js')
const ogu = require('./os get user.js')
const t = require('./test.js')

let test = {...cae.functions, ...cdo.functions, ...gm.functions}





async function outputDirFilesNameToRequire(){
    const directoryPath = path.join(__dirname);
    let files = fs.readdirSync(directoryPath).filter(cu => cu.includes(".js"))
    let text = ""
    for(let file of files){
        let req = file.replace(".js", "").split(" ").map(cu => cu[0]).join("")
        text += `const ${req} = require('./${file}')\n`
    }
    console.log(text)

}

async function updateDebugger(){
    await d.updateFunctions(test)
    let functions =  await d.getFunctions()
    return functions
}



async function main(){
    let func = await updateDebugger()
    let arr = ["a", "b", "a", "b", "c"]
    let obj = {"a": 2,
        "b":3,
        "c":14
    }
    console.log(func)
    let x1 = await func.countAllElements(obj, "values")
    let x2 = await func.countAllElements(obj, "values")
    console.table(x1)
    console.table(x2)
    


}

main()











// function main(){
    // let text = ""
    // text += "b".repeat(2)
    // text += "a".repeat(3)
    // text += "c".repeat(10)
    // text += "1".repeat(4)

    // let text = "Makes the keys of an object into alphabetic order start with numbers then letters"

    // let arr = text.split("")
    // let obj = {
    //     "a": 3,
    //     "b":2,
    //     "c":10,
    //     "ok": "a",
    //     "ob": "b",
    //     "al": "a",
    //     "4":2
    // }
    // let x = countAllElements(text, "keys")
    // console.table(x)
    // console.table(obj)
// }

// main()