const fruits = ["apple","banana", "mango", "orange"]

function printItem() {
    for(let i = 0; i < fruits.length; i = i + 3) {
        console.log(fruits[i])
    }
}

printItem()

const numbers = [4, 12, 7, 20, 3, 15];

function printNumbersGreaterThanTen() {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 10){
            console.log(numbers[i])
        }
    }
}

printNumbersGreaterThanTen()