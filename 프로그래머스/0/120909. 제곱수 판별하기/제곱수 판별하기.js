function solution(n) {
    var answer = 0;
    for (let i=1; i<n; i++) {
        if (i*i > n) {
            return 2
        }
        if (i*i === n) {
            return 1
        }
    }
    return answer;
}