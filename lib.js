function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
    s += numbers[i];
    }
    return s / numbers.length;
}

function prime(num) {
    let i;
    if(num===1){
        return false;
    }
    if(num===2){
        return true;
    }

    for(i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }

    return true;
}

function factorial(num) {
    let i;
    let m=1;
    for(i=1;i<=num;i++){
        m = m*i;
    }
    return m;
}


module.exports = {
    avg,
    prime,
    factorial
}