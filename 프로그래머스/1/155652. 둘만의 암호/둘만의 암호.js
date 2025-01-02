function solution(s, skip, index) {
    var answer = '';
    
    for (ltt of [...s]) {
        var alph = ltt.charCodeAt()
        var num = 0
        while(num < index) {
            alph++
            if (alph > 122) {
                alph = 97
            }
            if (![...skip].includes(String.fromCharCode(alph))) {
                num++
            }
        }
        answer += String.fromCharCode(alph)
    }
    return answer;
}