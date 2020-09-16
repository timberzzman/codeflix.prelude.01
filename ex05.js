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

function decapitalize(str = '') {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str[i - 1] == ' ') {
            result += lowerCase(str[i]);
        }
        //else if( str[i] == ' ' && i + 1 == str.length || str[i - 1] == ' ') {
        //    continue;
        //}
        else {
            result += str[i];
        }
    }
    return result;
}

console.log(decapitalize('Woonan'));
console.log(decapitalize('El Drago '));