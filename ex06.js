function split(str, separator) {
    const words = [];
    const nWord = 0;

    for (var i = 0; i < length; i++) {
        if (str[i] === separator) {
            nWord++;
        }
        words[nWord] = str[i];
    }
    return words;
}

function kebabCase(str='') {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            if (i != 0 && str.charCodeAt(i - 1) != 45) result += '-';
            result += String.fromCharCode(code + 32);
        }
        else if (code == 32) {
            result += '-';
        }
        else if (code == 45 && (i == 0 || i + 1 == str.length))
        {
            continue;
        }
        else {
            result += String.fromCharCode(code);
        }
    }
    return result;
}

kebabCase('love one code');
kebabCase('LoveOneCode');
kebabCase('-Love-One-Code-');
