function solution(dots) {
    var answer = 0;
    const [A, B, C, D] = [...dots]
    if ((B[1]-A[1])/(B[0]-A[0]) === (C[1]-D[1])/(C[0]-D[0])) {
        answer += 1
    } else if ((B[1]-C[1])/(B[0]-C[0]) === (A[1]-D[1])/(A[0]-D[0])) {
        answer += 1
    } else if ((B[1]-D[1])/(B[0]-D[0]) === (A[1]-C[1])/(A[0]-C[0])) {
        answer += 1
    }
    return answer;
}