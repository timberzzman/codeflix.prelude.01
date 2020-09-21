function repeat(str='', timeopt = 1) {
    var result = '';
    if (timeopt != 0) {
        for (var i = 0; i <= timeopt; i++) {
            result += str;
        }
    }
    return result;
}

repeat('w', 3);
// => 'www"
repeat('gomu', 0);
// => ''