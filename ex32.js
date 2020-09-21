function isUpperCase(str='') {
    for (var i  = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (!(code >= 65 && code <= 90)) {
            return false;
        }
    }
    return true;
}

console.log(isUpperCase('CHOPPER'));
// => true
console.log(isUpperCase('Chopper'));
// => false