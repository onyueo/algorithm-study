function solution(a, b) {
    var answer = 0;
    for (let i=2; i<=Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            a /= i
            b /= i
        }
    }
    if (b % 2 === 0) {
        while(b % 2 === 0) {
            b /= 2
        }
    }
    if (b % 5 === 0) {
        while(b % 5 === 0) {
            b /= 5
        }
    }
    
    return b === 1 ? 1 : 2;
}