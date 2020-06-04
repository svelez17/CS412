// Generator 1: Fibonacci number generator
// 0 1 1 2 3 5 8 13...
function* fibgen() {
    let [val1, val2, result] = [0, 0, 0];
    while (true) {
        result = val1 + val2;
        [val1, val2] = [val2, result];
        if (result == 0) {
            val1 = 1;
        }
        yield result;
    }
}

// Generator 2: Gets fibonacci numbers from fibgen,
// returns only even fibonacci numbers
function* evenfibgen() {
    const fibresult = fibgen();
    while (true) {
        let result = fibresult.next().value;
        if (result % 2 == 0) {
            yield result;
        }
        else {
            continue;
        }
    }
}

const myFibs = evenfibgen();
let count = 6;

while (count --> 0) {
    console.log(`Next even fibonnaci number: ${myFibs.next().value}`);
}
