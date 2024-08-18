function solution(numer1, denom1, numer2, denom2) {
    let ans1 = numer1 * denom2 + numer2 * denom1;
    let ans2 = denom1 * denom2;
    
    let gcd = 1;
    for (let i=1; i<=Math.min(ans1, ans2); i++) {
        if (ans1 % i === 0 && ans2 % i === 0) {
            gcd = i
        }
    }
  
    return [ans1 / gcd, ans2 / gcd];
}