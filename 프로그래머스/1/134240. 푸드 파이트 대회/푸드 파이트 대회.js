function solution(food) {
    var answer = '';
    for (let i=1; i< food.length; i++) {
        var n = Math.floor(food[i] / 2)
        for (let j=0; j<n; j++) {
            answer += i
        }
    }
    var rev = [...answer].reverse().join('')
    return answer + 0 + rev;
}