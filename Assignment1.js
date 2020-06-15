let sourceArr = [65, 43, 98, 43, 23, 76, 32, 54, 23, 43];

sourceArr.sort(function (a, b) { return a - b });
console.log('Ascending Order :: ' + sourceArr);

sourceArr.sort(function (a, b) { return b - a });
console.log('Descending Order :: ' + sourceArr);

let dupArr = [];
sourceArr.forEach(function (e, i) {
    if (sourceArr.indexOf(e, i + 1) > -1) {
        if (dupArr.indexOf(e) === -1) {
            dupArr.push(e);
        }
    }
});
console.log('Duplicates :: ' + dupArr);

let num = 76;
let modNum = 175;
sourceArr.forEach(function (element, index) {
    if (element == num) {
        sourceArr[index] = modNum;
    }
});
console.log('New values:: ' + sourceArr + ' Old Number :: ' + num + ' Modified Number :: ' + modNum);

let newNum = 50;
if (sourceArr.indexOf(newNum) === -1) {
    sourceArr.push(newNum);
}
console.log('New values  :: ' + sourceArr + ' Added :: ' + newNum);

let remDupArr = sourceArr.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
}, []);
console.log('No duplicates values :: ' + remDupArr);
let sourceMulArr = [];
sourceArr.forEach(function (element, index) {
    sourceMulArr[index] = sourceArr[index] * 10;
});
console.log('Values multiplied with 10 :: ' + sourceMulArr);

let sourceCopy = sourceArr.slice(0);
let dupArr1 = [];

sourceArr.forEach(function (e, i) {
    let counter = 0;
    sourceCopy.forEach(function (e1, i1) {
        if (sourceArr[i] == sourceCopy[i1]) {
            counter++;
            delete sourceCopy[i1];
        }
    });

    if (counter > 1) {
        let tempValue = new Object();
        tempValue.value = sourceArr[i];
        tempValue.count = counter;
        console.log(
            sourceArr[i] + ' :: count ' + counter);
        dupArr1.push(tempValue);
    }
});

let mutArr = sourceArr.slice().reverse();
console.log('Mutable values, Reverse :: ' + mutArr);

const immutArr = [...mutArr];
console.log('Immutable values, Reverse :: ' + immutArr);