
const evaluate = expression => {
    const opString = expression.charAt(1);

    if(isNaN(expression.charAt(0)) | isNaN(expression.charAt(2))) {
        return (expression) => 'Error: not a number';
    }
    else if (opString === '+') {
        return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
    }
    else if (opString === '-') {
        return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
    }
    else if (opString === '*') {
        return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
    }
    else if (opString === '/') {
        return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
    }
    else {
        return (expression) => 'Error: invalid operator';
    }
}
// const addExpr = '4+2';
// const multExpr = '5*7';
// const subExpr = '6-1';
// const divExpr = '9/2';
// const wrongExpr = 'a+3';
// let operator = evaluate(wrongExpr);
// console.log(`${wrongExpr} = ${operator(wrongExpr)}`);

module.exports = {evaluate};