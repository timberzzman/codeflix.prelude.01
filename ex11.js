function last(str='', len=1) {
    var result='';
    for (var i = str.length - len; i < str.length; i++) {
        if (i < 0) {
            i = 0;
        }
        result += str[i];
    }
    console.log(result);
    return result;
}

last('chopper');
last('chopper', 2);
last('tony', 5);