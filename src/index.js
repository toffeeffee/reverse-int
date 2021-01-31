module.exports = function reverse (n) {
    let str = n.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = (str[i]);
    }
    arr = arr.reverse();
    str = '';
    for (var i in arr) {
        str = str + arr[i].toString();
    }
    n = parseInt(str);
    return (n);
}
