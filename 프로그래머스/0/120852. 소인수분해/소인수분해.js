function solution(n) {
    var answer = [];
    let i = 2;
    
    while (n !== 1) {
        if (n % i === 0) {
            answer.push(i)
            while (n % i === 0) {
                n /= i
            }
        }
        i++
    }
    return answer;
}