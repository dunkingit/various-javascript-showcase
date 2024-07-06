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

let functions = {
    getCurrentDateObj
}

module.exports = {
    ...functions,
    functions
};