function snakeCase(str='') {
        let result = '';
    
        for (let i = 0; i < str.length; i++) {
            code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                if (i != 0 && str.charCodeAt(i - 1) != 45) result += '_';
                result += String.fromCharCode(code + 32);
            }
            else if ((code == 45) && (i == 0 || i == str.length - 1)){
                continue;
            }
            else if ((code == 39 || code == 45))
            {
                result += '_';
            }
            else {
                result += String.fromCharCode(code);
            }
        }
        console.log(result);
        return result;
}

snakeCase('gold d roger');
snakeCase('goldDRoger');
snakeCase('-Gold-D-Roger-');