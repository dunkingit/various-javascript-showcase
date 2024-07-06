function getLength(each = {}) {
    return each ? (each.length || each.size || Object.keys(each).length || 0) : 0;
}


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
