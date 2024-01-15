function factorial(n){
    if(n > 1){
        return n * factorial(n - 1);   
    } else return 1
}

function combine(n, r){
    return permutate(n, r) / factorial(n - r);
}

function permutate(n, r){
    return factorial(n) / factorial(r);
}

console.log(combine(4 * (10 ** 1.2),0))