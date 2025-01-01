function solution(t, p) {
    var answer = 0;
    var len = p.length
    for (let i=0; i<= t.length - len; i++) {
        var part = t.slice(i, i+len)
        if(p >= part) {
            answer += 1
        }
    }
    return answer;
}