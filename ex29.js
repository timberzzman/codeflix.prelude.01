function isDigit(str='') {
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (!(code >= 48 && code<= 57)){
            return false;
        }
    }
    return true;
}


console.log(isDigit('42'));
// => true
console.log(isDigit('9.4'));
// => false
console.log(isDigit('ch0pper'));
// => false