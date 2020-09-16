function lowerCase(str = '') {
    let result = "";
    for (i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        if(char >= 65 && char <= 90) {
            result += String.fromCharCode(char + 32);
        }
        else result += String.fromCharCode(char);
    }

    return result;
}

console.log(lowerCase('Chopper'));
console.log(lowerCase('TONY TONY'));
