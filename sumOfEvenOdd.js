function sumOfodd(n){
    let answer = 0;
    let inc = 1;
    for(let i = 1; i <= n; i = i + 1){
        answer = answer + inc;
        inc = inc + 2
        console.log('i = ' + i + ' inc = ' + inc + ' answer = ' + answer)
    }
    return answer;
}

 let result = sumOfodd(3);
 console.log(result)


function sumOfeven(n){
    let answer = 0
    let inc = 0
    for(let i = 1; i <= n; i = i + 1){
        answer = answer + inc;
        inc = inc + 2;
        console.log(`i = ${i}`, `inc = ${inc} answer = ${answer}`);
    }
    return answer ;
}

let add = sumOfeven(3);
console.log(add)