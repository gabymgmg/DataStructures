function waiter(n, q) {
    let listOfPrimes = generatePrime(q)
    console.log(listOfPrimes)
    let B = []
    let answers = []
    let counter = 0
    let A = []

    while (counter < q) {
        A = []
        while (n.length > 0) {
            let currPlate = n.pop()
            if (currPlate % listOfPrimes[counter] === 0) {
                B.push(currPlate)
            }
            else {
                A.push(currPlate)
            }
        }
        while (B.length > 0) {
            answers.push(B.pop())
        }
        n = A
        counter++
    }
    while (A.length > 0) {
        answers.push(A.pop())
    }
    return answers
}
const test2 = [3, 4, 7, 6, 5]
const test1 = [3, 3, 4, 4, 9]

console.log(waiter(test1, 2))

function isPrime(n) {
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function generatePrime(n) {
    let arr = []
    let count = 0
    let num = 2
    while (count < n) {
        if (isPrime(num)) {
            arr.push(num)
            count++
        }
        num++
    }
    return arr
}