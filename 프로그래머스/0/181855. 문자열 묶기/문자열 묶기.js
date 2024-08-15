function solution(strArr) {
    var answer = Array(strArr.length).fill(0);
    strArr.map((str, i) => answer[str.length] += 1 )
    return Math.max(...answer);
}