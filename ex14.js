function count(str='') {
    var result = 0;
    while (str[result] !== undefined) {
        result++;
      }
    return result;
}

count('ch0pper');
// => 7