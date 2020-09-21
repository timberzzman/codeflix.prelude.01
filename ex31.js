function isLowerCase(str='') {
    for (var i  = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (!(code >= 97 && code <= 122)) {
            return false;
        }
    }
    return true;
}

isLowerCase('chopper');
// => true
isLowerCase('Chopper');
// => false
isLowerCase('ch0pper');
// => false