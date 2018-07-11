const numbers = [1,2,3,4,5,6,7]

for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]

    if (currentNumber % 2 === 0) {
        console.log(currentNumber)
    }

}