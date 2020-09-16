function length(str = '') {
    let result = 0;
    while (str[result] != undefined) {
        result++;
    }
    return result;
}

console.log(length('ch0pper'));