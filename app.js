function add(n1, n2, showResult, resultPhrase) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    var result = n1 + n2;
    if (showResult) {
        return resultPhrase + result;
    }
    else {
        return result + "";
    }
}
var n1 = 5;
var n2 = 3;
var showResult = true;
var resultPhrase = "Result is:";
document.body.innerHTML = add(n1, n2, showResult, resultPhrase);
