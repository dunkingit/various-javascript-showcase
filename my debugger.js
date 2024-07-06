const { type } = require("os");
const { json } = require("stream/consumers");
const t = require("./test.js");
const p = require("./test2.js");
const test = require("./test.js");

let myEventLogger = {};
let arrayEvents = []
let eventNumber = 0

async function getDayName(dayNumber) {
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    return days[dayNumber]? days[dayNumber].charAt(0).toUpperCase() + days[dayNumber].slice(1):"Invalid day number";
}

async function getCurrentDateObj(){
    const d = new Date();
    let dateObj = {
        "day":d.getDate(),
        "weekday": await getDayName(d.getDay()),
        "month":d.getMonth() + 1,
        "year": d.getFullYear(),
        "hour":d.getHours(),
        "minute":d.getMinutes(),
        "seconds":d.getSeconds(),
        "formatted date": `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`,
        "formatted standard time": `${d.getHours()}:${d.getMinutes()}`,
        "formatted full time": `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`,
        "time marker": `${d.getHours() > 11?"PM":"AM"}`,
        "full":`${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getHours() > 11?"PM":"AM"}`
    }
    dateObj["fullStatTime"] = `${dateObj["formatted date"]} ${dateObj["formatted full time"]} ${dateObj["time marker"]}`
    return dateObj
}

async function eventLogger(event) {
    eventNumber++
    // console.log(`"${eventNumber}":"${event}"`)
    let num = Object.keys(myEventLogger).length + 1;
    myEventLogger[eventNumber] = event;
}

function indentedViewOfObject(obj) {
    return JSON.stringify(obj, null, 2)
}

async function wrap(object, method, wrapper, eventLogger) {

    //object - arg: functions object - all functions in the function object
    //method - arg: key from autoWrap which the method being passed into wrap
    //wrapper - arg: wrapper function for logging
    //eventLogger - arg: order of event and storing inside of an object.

    //getting the object method

    const originalMethod = object[method];
    const methodStr = String(originalMethod)


    let names = methodStr.slice(methodStr.indexOf("(") + 1, methodStr.indexOf(")"))
    names = names.replaceAll(", ", ",")
    names = names.split(",")



    object[method] = async function(...args) {
        try {
            await eventLogger({"start time": (await getCurrentDateObj()).fullStatTime})
            await eventLogger(`Calling ${method}`);

            // Execute wrapper with original method and arguments
            const result = await wrapper(originalMethod.bind(this), method, names, ...args);

            await eventLogger(`Successfully returned from ${method}`);
            await eventLogger({"end time": (await getCurrentDateObj()).fullStatTime})
            console.log(myEventLogger)
            arrayEvents.push(myEventLogger)
            myEventLogger = {}
            return result;
        } catch (ex) {
            await eventLogger(`Error in ${method}: ${ex}`);
            throw ex;
        }
    };
}


function getLength(each = {}) {
    return each ? (each.length || each.size || Object.keys(each).length || 0) : 0;
}

async function makeArgsObject(names, ...args){
    let namedArgObject  = {}
    if(names.length == Object.keys(args).length){
        if(Array.isArray(names)){
            for(let each in names){
                let name = names[each]
                let index = Number(each) + 1
                let arg = arguments[Number(each) + 1]

                namedArgObject[name] = arg
                namedArgObject[`${name} argument index`] = index
                namedArgObject[`${name} type`] = Array.isArray(arg)? "array":typeof arg
                try {
                    namedArgObject[`${name} length`] = await getLength(arg);
                } catch (err) {
                    namedArgObject[`${name} length error`] = 'Failed to determine length';
                }
        }
    }
}
return namedArgObject
}


async function loggingWrapper(originalFunction, method, names, ...args) {
    let argsObject = await makeArgsObject(names, ...args)
    // let ar = await argumentsIntoObj(names, ...args);
    // await eventLogger(`Calling function with args: ${args.join(', ')}`);
    let callingString = `Calling function ${method} with args`
    let callingArgs = {}
    callingArgs[callingString] = argsObject
    await eventLogger(callingArgs)
        // await eventLogger(JSON.stringify(callingArgs, null, 2));

    const result = await originalFunction(...args);
    await eventLogger(`Function returned with result: ${result}`);
    return result;
}



function autoWrapAll(obj, wrapper, logger) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'function') {
           wrap(obj, key, wrapper, logger);
        }
    });
}



async function ff(param, param2){
    // console.log("args ------", arguments)
    return `Hello ${param}`
}



let functions = {
    // ...t,
    // ...p
    // test: async (param, param2) => param + " " + param2,
    // tester
};

async function wrapAll(){
    return autoWrapAll(functions, loggingWrapper, eventLogger);
}

async function tt(){
    console.log("in tt")
    let x = functions.getBinary("test")
    console.log("regular", x)
    let xt = await functions.getBinary("test")
    console.log("await version get", xt)
}

async function fun(){
    console.log(functions)
}

async function updateFunctions(param){
    functions = param
    wrapAll()
}

async function getFunctions(param){
    return functions
}


module.exports = {
    functions,
    wrapAll,
    tt,
    fun,
    updateFunctions,
    getFunctions
};

















//==================================================
//Old main
//================================================== 


// async function main() {
//     // let testVariable = await functions.test("test 1", "test 2");
//     // console.log(`Test variable: ${testVariable}`);
//     // let testVariable2 = await functions.tester("name 1", "name 2");
//     // console.log(`Test variable 2: ${testVariable2}\n\n`);
//     await functions.t("Hello world")
//     console.log(myEventLogger);
// }

// async function tester(){
//     // for(let i = 0; i < 200; i++){
//     //     await d.pp(`test string number: ${i}`)
//     // }
//     console.log(t.functions)
//     t.functions[ff] = ff
//     console.log(t.functions)
//     // console.log(JSON.stringify(arrayEvents, null, 2))
// }
// // main()

// tester()














//==================================================
//Old code
//================================================== 

// console.clear()
// console.log("\n".repeat(15))

// let a = "async function tester(param, param2, param3){"+
//     // console.log("args ------", arguments)
//     "return `Hello ${param}`}"
// console.log(a.slice(a.indexOf("(") + 1, a.indexOf(")")))
// function indentedViewOfObject(obj) {
//     return JSON.stringify(obj, null, 2)
//     // let text = "{\n";
//     // for (const [key, value] of Object.entries(obj)) {
//     //     text += `  ${key}: "${value}",\n`;
//     // }
//     // text = text.slice(0, -2) + "\n}";  // Cleanly remove the last comma and add closing brace
//     // return text;
// }

// function getLength(each = {}) {
//     if (!each || typeof each !== 'object') return 0; // Return 0 if `each` is falsy or not an object
//     return each.length || each.size || Object.keys(each).length || 0;
// }


// function getLength(each) {
//     if (each === null || each === undefined) return 0;  // Handle null/undefined
//     if (Array.isArray(each) || typeof each === 'string') return each.length;
//     if (each instanceof Set || each instanceof Map) return each.size;
//     if (typeof each === 'object') return Object.keys(each).length;
//     return 0;  // Default case for types that don't have length/size
// }


// old version enumerating arguements
// async function argumentsIntoObj(names, ...args) {

//     // let obj = {"All Arguments": args.map(a => JSON.stringify(a)).join(', ')};
//     let obj = {"All Arguments": args.map(a => JSON.stringify(a)).join(', ')};
//     for (const [index, each] of args.entries()) {
//         let arg = `argument ${index + 1}`;
//         obj[arg] = each;
//         obj[`${arg} type`] = typeof each;
//         try {
//             obj[`${arg} length`] = await getLength(each);
//         } catch (err) {
//             obj[`${arg} length error`] = 'Failed to determine length';
//         }
//     }
//     return await indentedViewOfObject(obj);
// }


// async function argumentsIntoObj(names, ...args) {

//     // let obj = {"All Arguments": args.map(a => JSON.stringify(a)).join(', ')};
//     let obj = {"All Arguments": args.map(a => JSON.stringify(a)).join(', ')};
//     for (const [index, each] of args.entries()) {
//         let argName = names[Number(index)]
//         obj[`index ${index}`] = index
//         obj["function argument name"] = `${argName}`
//         let arg = `argument ${names[Number(index)]}`;
//         obj[arg] = each;
//         obj[`${arg} type`] = typeof each;
//         try {
//             obj[`${arg} length`] = await getLength(each);
//         } catch (err) {
//             obj[`${arg} length error`] = 'Failed to determine length';
//         }
//     }
//     console.log(obj)
//     return await indentedViewOfObject(obj);
// }


        // await eventLogger(`{Calling function with args: ${JSON.stringify(argsObject, null, 2)}}`);
    // await eventLogger(JSON.stringify(callingArgs, null, 2));
    // let ar_str = JSON.stringify({"Argument details": ar})
    // await eventLogger(`{"Argument details": ${ar}`);