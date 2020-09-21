function substr(str='', start, len=str.length) {
    var result = '';
    var subLen = 0;
    console.log(len);
    for (i = start; i < str.length && subLen < len; i++) {
        result += str[i];
        subLen++;
    }
    return result;
}

substr('tony tony chopper', 10);
substr('ch0pper', 2, 2);