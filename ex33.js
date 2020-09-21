function isNumeric(str='') {
    for (var i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (!(code >= 48 && code <= 57) && code != 45 && code != 46 && code != 43 && code != 69) {
            return false;
        }
    }
    return true;
}

console.log(isNumeric('1986'));
// => true
console.log(isNumeric('-7.5'));
// => true
console.log(isNumeric('1.9E+2'));
// => true
console.log(isNumeric('five'));
// => false