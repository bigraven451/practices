var numArr = [1, 2, 3, 4, 5];

function skipItemsInArray() {
    let len = numArr.length;
    for(let i = 0; i <= len; i = i + 2) {
        console.log(`i = ${i} value = ${numArr[i]}`)
    }
}

skipItemsInArray() 

function skipItemsInaArrayWhile() {
    let len = numArr.length
    let i = 0
    while(i <= len){
        i = i + 2
        console.log(`i = ${i} value = ${numArr[i]}`)
    }
}

skipItemsInaArrayWhile()