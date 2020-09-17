function first(str='', len=1) {
    var result = '';
    for (i = 0; i < len; i++)
    {
        if (str[i] == undefined) {
            break;
        }
        result += str[i];
    }
    return result;
}

first('chopper');
first('chopper', 2);
first('tony', 5);