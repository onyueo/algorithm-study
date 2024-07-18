function solution(my_string, m, c) {
    var answer = [...my_string].map((str, i) => i % m + 1 === c ? str : '').join('');
    return answer;
}