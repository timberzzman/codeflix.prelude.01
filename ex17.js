function indexOf(str='', search, fromIndexopt = 0) {
    var result = 0;
    for (var i = fromIndexopt; i <= str.length - search.length;i++) {
        result = i;
        for (var j = 0; j < search.length; j++) {
            if (search[j] != str[i + j]) {
                break;
            }
            if (j + 1 == search.length) {
                return result;
            }
        }
    }
    return -1;
}

console.log(indexOf('ch0pper', '0'));
// => 2
console.log(indexOf('ch0pper', 'pp'));
// => -1