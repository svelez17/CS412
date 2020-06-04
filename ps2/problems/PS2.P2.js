// Takes in a string (sentence) and splits it to an array
// Generator spits out each word of the array one at a time
function* wordbyword(sentence) {
    const words = sentence.split(' ');
    for (i=0; i <= words.length; i++) {
        let result = words[i];
        yield result;
    }
}

const sentence = 'All I know is something like a bird within her sang';
const mySentence = wordbyword(sentence);
let count = sentence.split(' ').length;

while (count --> 0) {
    console.log(`Next word: ${mySentence.next().value}`);
}
