// map() function for objects
export const objectMap = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

// map() object and return array
export const objectMapArray = (obj, fn) => Object.entries(obj).map(([k, v], i) => fn(v, k, i));
