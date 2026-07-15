var numArr = [1, 2, 3, 4, 5];

function skipEven() {
    let len = numArr.length
    for(let i = 1; i <= len - 1; i = i + 2){
        console.log(`i = ${i} value = ${numArr[i]}`)
    }
}

skipEven()

function skipEvenWhile() {
    let len = numArr.length
    let i = 1
    while(i <= len){
        i = i + 2
        console.log(`i = ${i} value = ${numArr[i]}`)
    }
}