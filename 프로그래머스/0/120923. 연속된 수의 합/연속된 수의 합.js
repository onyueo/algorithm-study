function solution(num, total) {
    var answer = [];
    let mid = Math.floor(total / num)
    let len = Math.floor(num / 2)
    
    if (num % 2 === 1) {
        for (let i=mid-len; i<= mid+len; i++){
            answer.push(i)
        }
    } else {
        for (let j=mid-len+1; j<=mid+len; j++){
            answer.push(j)
        }
    }
    return answer;
}