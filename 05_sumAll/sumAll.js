const sumAll = function(num1,num2) {
    let smallNum = Math.min(num1,num2);
    let largeNum = Math.max(num1,num2);
    let sum = 0
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || isNaN(num1) || typeof num2 !== "number" || isNaN(num2)){
        return "ERROR";
    }
    for (let i = smallNum; i <= largeNum; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
