function solution(dots) {
    var answer = 1;
    const [A, B, C, D] = [...dots]
    for (num of [B, C, D]) {
        if (num[0] === A[0]) {
            answer *= (Math.abs(A[1] - num[1]))
        }
        if (num[1] === A[1]) {
            answer *= (Math.abs(A[0] - num[0]))
        }
    }
    return answer;
}