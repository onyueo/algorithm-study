function solution(binomial) { 
    let [a, b, c] = [...binomial.split(' ')]
    let num1 = Number(a);
    let num2 = Number(c);
    
    if (b === '+'){
        return num1 + num2
    } else if (b === '-'){
        return num1 - num2
    } else {
        return num1 * num2
    }
}