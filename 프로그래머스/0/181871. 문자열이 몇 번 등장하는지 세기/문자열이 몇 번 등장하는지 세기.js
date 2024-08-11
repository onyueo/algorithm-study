function solution(myString, pat) {
    var answer = 0;
    let p = pat.length
    for (let i=0; i <= myString.length - p; i++) {
        if (myString.slice(i, i + p) === pat) {
            answer += 1
        }
    }
    return answer;
}