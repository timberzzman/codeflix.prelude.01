function isAlphaNum(char) {
    code = char.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) return true;
    else if(code >= 48 && code <= 57) return true;
    else return false;
}

function isUpperCase(char) {
    code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) return true;
    else return false;
}

function countWords(str='', patternopt) {
    var result = 1;
    if (patternopt) {
        const regex = new RegExp(patternopt, 'g')
        const substrings = str.match(regex) || []
        return substrings.length
    }
    for (var i = 0; i < str.length; i++) {
        if ((str[i] == ' ' || str[i] == '-') && isAlphaNum(str[i + 1]) && !isUpperCase(str[i + 1]))
        {
            result++;
        }
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 && i != 0)
        {
            result++;
        }
    }
    return result;
}

countWords('Tony Tony Ch0pper');
// => 3
countWords('TonyTonyCh0pper');
// => 3
countWords('Tony Tony - Ch0pper');
// => 3