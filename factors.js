const factors = []
const all = [];

const num = Math.abs(process.argv[2]);

for(let i = 1; i < num; i++){
    const quot = num / i;
    if(quot == Math.floor(quot) && !all.includes(i) && !all.includes(quot)){
        const fact = [i, quot];
        all.push(...fact);
        factors.push(fact);
    }
}

const every = factors.sort((a,b) => a - b)
if(factors.length < 11){
    console.log(...every);
} else {
    every.forEach(a => console.log(a));
}

const sum = process.argv[3] ? Number(process.argv[3]) : null;

if(sum !== null){
    const truth = [];
    const num = Number(process.argv[2]);
    for(const fact of factors){
        const a = Math.abs(fact[0]);
        const b = Math.abs(fact[1]);
        /*
         * +a +b
         * -a -b
         * -a +b
         * +a -b
        */



        if(a * b == num && a + b == sum){
            truth.push(a, b);
            break;
        }
        if(-a * -b == num && -a + -b == sum){
            truth.push(-a, -b);
            break;
        }
        if(-a * b == num && -a + b == sum) {
            truth.push(-a, b);
            break;
        }
        if(a * -b == num && a + -b == sum){
            truth.push(a, -b);
            break;
        }
    }

    if(truth.length) console.log(`Fators are ${truth[0]} ${truth[1]}`);
}