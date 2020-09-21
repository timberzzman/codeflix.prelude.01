function insert(str='', toInsertopt='', positionopt = 0) {
    var result = '';
    for (var i = 0; i < str.length;i++) {
        console.log(i, str[i]);
        if (i == positionopt) {
            result += toInsertopt
        }
            result += str[i];
    }
    console.log(result);
    return result;
}
insert('chpper', '0', 2);
// => 'ch0pper'
insert('Tony', ' Tony Ch0pper', 4);
// => 'Tony Tony Ch0pper'