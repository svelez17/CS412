const makeAlphabetical = word => word.match(/[A-z]/g).sort().join('');

// console.log(`supercalifragilisticexpialidocious alphabetical: ${makeAlphabetical('supercalifragilisticexpialidocious')}`);
// console.log(`This sentence is in alphabetical order. alphabetical: ${makeAlphabetical('This sentence is in alphabetical order.')}`);


module.exports = {makeAlphabetical};