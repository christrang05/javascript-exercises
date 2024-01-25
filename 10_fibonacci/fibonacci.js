const fibonacci = function(sequenceNumber) {
    const number = parseInt(sequenceNumber, 10);
    if (number < 0) return "OOPS";
    if (number === 0 || number === 1) return number;

    let a = 0;
    let b = 1;
    let fib = 0;
    for (let i = 2; i <= number; i++) {
       fib = a + b;
       a = b;
       b = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
