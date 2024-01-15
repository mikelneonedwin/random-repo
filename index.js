function divisors(number){
    let divisor = 2;
    const factors = [];
    while(divisor < number){
        if(number / divisor == Math.floor(number / divisor)){
            factors.push(divisor);
        }
        divisor++;
    }

    console.log('The numbers that can divide', number, 'are', ...factors);
}

/**
 * 
 * @param {number} a the first term
 * @param {number} r the common ratio of the geometric progression
 * @param {number} n the nth term to be found
 * @returns {number} The nth term of the geometric progression
 */

function gp(a, r, n){
    const terms = [];
    for(let i = 0; i < n; i++){
        terms.push(a * r ** i);
    }
    return terms[n];
}

/**
 * 
 * @param {number} a the first term
 * @param {number} r the common ratio
 * @param {number} n the number of terms
 * @returns {number} the sum of the geometric progression
 */

function sumgp(a, r, n){
    if(1 > r) return (a * (1 - r ** n) ) / (1 - r);

    else return (a * (r ** n - 1)) / (r - 1);
}