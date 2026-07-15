var numArr = [1, 2, 3, 4, 5];
var charArr = ["A", 'M', `C`, ' M', 'A', 'T', 'H', 'S']
// console.log(numArr.length, charArr.length)

function printIntegerArray() {
    for(let i = 0; i < numArr.length; i++) {
        console.log(`i = ${i} value = ${numArr[i]}`)

        
    }
    console.log(numArr.indexOf(4));
    
}

printIntegerArray();

function printCharacterAsString() {
    let name = '' ;
    let len = charArr.length
    for(let i = 0; i < len; i++) {
        name = name + charArr[i]

    }
    console.log(name)

}
printCharacterAsString()