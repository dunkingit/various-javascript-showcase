async function countAllElements(param, typeSort){
    let mapper = new Map();
    let tempArray;

    if(typeof param === "string"){
        tempArray = param.toLowerCase().split("")
    }else if(Array.isArray(param)){
        tempArray = param
    }


    if(Array.isArray(tempArray)){
        let unmodifiedArray = Array.from(new Set(tempArray)).map((cu, ind) => {
            mapper.set(cu, tempArray.filter(cu2 => {
                return cu2 === cu || cu2 === Number(cu)
                }).length);
            });
    }

    let newMapper = new Map();
    let setArray;

    if(Array.isArray(tempArray)){
        setArray = Array.from(mapper.entries())
    }else{
        setArray = Object.entries(param)
    }


    if(typeSort && typeSort === "values"){
        let temp = setArray.sort(([key, value], [key2, value2]) => value - value2);
        for(let [key, value] of temp){
            newMapper.set(key, value);
        }
    }

    // Makes the keys of an object into alphabetic order start with numbers then letters

    if(typeSort && typeSort === "keys"){
        let temp = setArray.sort(([key, value], [key2, value2]) => (key < key2 ? -1 : (key > key2 ? 1 : 0)));
        temp.forEach(([key, value]) => newMapper.set(key, value));
    }

    return newMapper.size > 0 ? newMapper : mapper;
}

let functions = {
    countAllElements
}

module.exports = {
    ...functions,
    functions
};