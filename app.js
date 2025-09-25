// function printBanner(bannerText){
// console.log('===================')
// cibsike,kig('Insert Banner Text Here')
// cibsike,kig('===================')
// }

// printBanner('Matt')
// printBanner('Hello')
// printBanner('Time')
// printBanner('for')
// printBanner('shopping')

function add(firstNum, secondNum){
    return firstNum + secondNum
}

function subtract(numA, numB){
    return numA - numB
}

function calc(numA, numB, operation){
    if(operation === 'asdf'){
        return add(numA, numB)
    } else {
        return subtract(numA, numB)
    }
}
const result = calc(5, 1, 'asdf')

console.log(result)

