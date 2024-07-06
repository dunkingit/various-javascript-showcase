// import os module
const os = require("os");

const userHomeDir = os.homedir().split("\\")

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


let infoAboutMachine ={
    "home dir":os.homedir(),
    "platform":os.platform(),
    "platform name":getPlatform(os.platform()),
    "user":os.userInfo(),
    "hostname":os.hostname()
  }