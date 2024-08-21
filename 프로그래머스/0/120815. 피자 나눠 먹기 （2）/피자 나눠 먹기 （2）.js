function solution(n) {
    var answer = 0;
    for (let i = 1; i <= 6; i++) {
        if (n % i === 0 && 6 % i === 0) {
            answer = i
        }
    }
    return n / answer;
}