
function indexOf(str='', search, fromIndexopt=str.length - 1) {
    var result = 0;
    for (var i = fromIndexopt; i > 0;i--) {
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

console.log(indexOf('ch0pper', 'p'));
// => 4
console.log(indexOf('ch0pper', 'o'));
// => -1