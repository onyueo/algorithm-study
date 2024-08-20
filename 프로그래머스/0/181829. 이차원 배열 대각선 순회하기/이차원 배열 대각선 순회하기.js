function solution(board, k) {
    let answer = 0
    let i = 0
    for (arr of board) {
        answer += arr.slice(0, k-i+1).reduce((arr, cur) => arr+cur, 0)
        console.log(answer)
        i++
        if(i > k) {
            break
        }
    }
  return answer
}