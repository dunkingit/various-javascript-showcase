// import os module
const os = require("os");

function getPlatform(platform){
    let obj = {
    'aix':"IBM AIX",
    'android':"Android",
    'darwin':"Darwin(MacOS, IOS etc)",
    'freebsd':"FreeBSD",
    'linux':"Linux",
    'openbsd':"OpenBSD",
    'sunos':"SunOS",
    'win32':"windows"
    }
    return Object.keys(obj).includes(platform)? obj[platform]:"unknown"
}


function getMemory(param){
    const mem = {}
    mem.kb = param / 1024
    mem.mb = mem.kb / 1024
    mem.gb = mem.mb / 1024
    return mem
}

let infoAboutMachine ={
    "home dir":os.homedir(),
    "platform":os.platform(),
    "platform name":getPlatform(os.platform()),
    "user":os.userInfo(),
    "hostname":os.hostname()
  }

let mem = {
    total_mem:getMemory(os.totalmem()),
    free_mem:getMemory(os.freemem())
}
// console.table(mem)


// const d = new Date();
// let dateObj = {
//     day:d.getDate(),
//     day_of_the_week: getDayName(d.getDay()).toLowerCase(),
//     month:d.getMonth() + 1,
// }

// getMemory()