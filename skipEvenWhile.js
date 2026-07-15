var numArr = [1, 2, 3, 4, 5];

function skipEvenWhile() {
    let len = numArr.length;
    let i = -1;
    while(i <= len - 3){
        i = i + 2
        console.log(`i = ${i} value = ${numArr[i]}`)
    }
}

skipEvenWhile()