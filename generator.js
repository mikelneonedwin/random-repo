const generateRange = ({ max, min}) => Array(max - min + 1).fill(min).map((a,b) => a + b)

console.log(...generateRange({min: 0, max: 10}))