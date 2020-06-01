const runfunction = (str,func) => {
    const result = func(str);
    return result;
}

const expression1 = runfunction('supercalifragilisticexpialidocious', (str)=>str.split(/(?=c)/g));
const expression2 = runfunction('supercalifragilisticexpialidocious', (str)=> {
    const newStr = str.replace(/a/g, 'A');
    const obj = {
        originalString: str,
        modifiedString: newStr,
        numberReplaced: newStr.match(/A/gi).length,
        length: newStr.length,
    }
    return obj;
});

//console.log(`${expression1}`);
//console.log(expression2);

module.exports = {runfunction};
