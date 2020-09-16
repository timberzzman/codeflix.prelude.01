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

function capitalize(str='', restToLoweropt=false) {
    let result = '';
    let code;
    result += upperCase(str[0]);
    if (!restToLoweropt) {
        for (i = 1; i < str.length; i++) {
            result += str[i];
        }
    }
    else {
        let temp = ''; 
        for (i = 1; i < str.length; i++) {
            temp += str[i];
        }
        result += lowerCase(temp);
    }
    return result;
}

console.log(capitalize('one Code'));
console.log(capitalize('One CODE', true));