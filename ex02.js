function upperCase(str = '') {
    let result = "";
    for (i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        if(char >= 97 && char <= 122) {
            result += String.fromCharCode(char - 32);
        }
        else result += String.fromCharCode(char);
    }

    return result;
}

console.log(upperCase('Chopper'));
console.log(upperCase('tony tony'));