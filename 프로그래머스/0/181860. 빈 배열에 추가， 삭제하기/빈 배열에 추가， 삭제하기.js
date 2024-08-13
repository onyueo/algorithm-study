function solution(arr, flag) {
    var answer = [];
    let k = 0
    for (ar of flag) {
        if (ar) {
            for (let i=0; i < arr[k] * 2; i++) {
                answer.push(arr[k])
            }
        } else {
            for (let i=0; i < arr[k]; i++) {
                answer.pop()
            }
        }
        k++
    }
    return answer;
}