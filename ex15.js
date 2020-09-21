function countSubstrings(str='', substring) {
    var result = 0;

    for (var i = 0; i <= str.length - substring.length;i++) {
        for (var j = 0; j < substring.length; j++) {
            if (substring[j] != str[i + j]) {
                break;
            }
            if (j + 1 == substring.length) {
                result++;
            }
        }
    }
    console.log(result);
    return result;
}

countSubstrings('Tony Tony Chopper!', 'Tony');
// => 2
countSubstrings('gomu gomu no bazooka', 'gatling');
// => 0