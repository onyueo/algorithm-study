function solution(names) {
    var answer = names.filter((el, i) => i % 5 === 0);
    return answer;
}