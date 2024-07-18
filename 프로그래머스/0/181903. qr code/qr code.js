function solution(q, r, code) {
    var answer = [...code].filter((str, i) => i % q === r ? str: '').join('');
    return answer;
}