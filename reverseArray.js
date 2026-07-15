var charArr = ["A", 'M', `C`, 'M', 'A', 'T', 'H']
 


function reverseArray() {
    let len = charArr.length;
    let name = '';
    for(let i = len - 1; i >= 0; i--) {
        name = name + charArr[i];
    }
    console.log(name)
}

reverseArray()