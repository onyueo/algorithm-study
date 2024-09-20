function solution(name, yearning, photo) {
    var answer = [];
    for (item of photo) {
        answer.push(name.map((el, i) => item.includes(el) ? yearning[i] : '').reduce((arr, cur) => arr + +cur, 0))
    }
    return answer;
}