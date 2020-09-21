function isBlank(str='') {
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return false;
        }
    }
    return true;
}

console.log(isBlank(''));
// => true
console.log(isBlank(' '));
// => true
console.log(isBlank('Ch0pper!'));
// => false