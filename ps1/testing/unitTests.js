const {describe, it} = require('mocha'); //mochajs.org for docs (runner)
const {expect} = require('chai') //chaijs.com for docs (individual tests)

const {makeAlphabetical} = require('../problems/PS1.P1');
const {evaluate} = require('../problems/PS1.P2');
const {runfunction} = require('../problems/PS1.P3');

describe('Part 1, Problem 1', () => {

    it('should return aaacccdeefgiiiiiiillloopprrssstuux for supercalifragilisticexpialidocious', function () {
        let result = makeAlphabetical('supercalifragilisticexpialidocious');
        expect(result).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });

    it('should return abcxyz for byazcx', function () {
        let result = makeAlphabetical('byazcx');
        expect(result).to.be.equal('abcxyz');
    });

    it('should return ABCabc for aBCcb.A123', function () {
        let result = makeAlphabetical('aBCcb.A123');
        expect(result).to.be.equal('ABCabc');
    });

})



describe('Part 1, Problem 2', () => {

    it('should return 2 for 6/3', function () {
        let expression = '6/3';
        let operator = evaluate(expression);
        let result = operator(expression);
        expect(result).to.be.equal(2);
    });

    it('should return Error: invalid operator for 6%2', function () {
        let expression = '6%2';
        let operator = evaluate(expression);
        let result = operator(expression);
        expect(result).to.be.equal('Error: invalid operator');
    });

    it('should return Error: not a number for a+3', function () {
        let expression = 'a+3';
        let operator = evaluate(expression);
        let result = operator(expression);
        expect(result).to.be.equal('Error: not a number');
    });
})


describe('Part 1, Problem 3', () => {

    it('should return super,califragilisti,cexpialido,cious for supercalifragilisticexpialidocious', function () {
        let str = 'supercalifragilisticexpialidocious';
        let func = (str)=>str.split(/(?=c)/g);
        let result = runfunction(str, func).toString();
        expect(result).to.be.equal('super,califragilisti,cexpialido,cious');
    });

    it('supercAlifrAgilisticexpiAlidocious for supercalifragilisticexpialidocious', function () {
        let str = 'supercalifragilisticexpialidocious';
        let func = (str)=> {
            const newStr = str.replace(/a/g, 'A');
            const obj = {
                originalString: str,
                modifiedString: newStr,
                numberReplaced: newStr.match(/A/gi).length,
                length: newStr.length,
            }
            return obj;
        };
        let result = runfunction(str, func);
        expect(result.modifiedString).to.be.equal('supercAlifrAgilisticexpiAlidocious');
    });

    it('removeAllpunctuaTion for remove,All. punctuaTion!', function () {
        let str = 'remove,All. punctuaTion!';
        let func = (str)=> str.match(/[A-z]/g).join('');
        let result = runfunction(str, func);
        expect(result).to.be.equal('removeAllpunctuaTion');
    });

})