function swapCase(str='') {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        //console.log(str[i]);
        if (code >= 65 && code <= 90)
        {
            result += String.fromCharCode(code + 32);
            continue;
        }
        else if (code >= 97 && code <= 122)
        {
            result += String.fromCharCode(code - 32);
            continue;
        }
        else result += String.fromCharCode(code);
    }
    return result;
}

swapCase('One Code');
swapCase('1337 Fruits');