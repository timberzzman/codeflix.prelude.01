function slice(str='', start, endopt=str.length) {
    var result = '';
    if (start > 0) {
        for (var i = start; i < endopt; i++) {
            result += str[i];
        }
    }
    else {
        for (var i = str.length - (start * -1); i < str.length; i++) {
            if (i < 0) {
                i = 0;
            }
            result += str[i];
        }
    }
    return result;
}

slice('ch0pper', 1);
// => 'h0pper'
slice('ch0pper', -4);
// => 'pper'
slice('ch0pper', 1, 4);
// => 'h0p'