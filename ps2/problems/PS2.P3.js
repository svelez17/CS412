// Function, returns the cube value of its input
const cube = (x) => {
    console.log(`${x}^3 = ${Math.pow(x, 3)}`);
}

const cubearray = [1,2,3,4,5,6,7].map(x => cube(x));