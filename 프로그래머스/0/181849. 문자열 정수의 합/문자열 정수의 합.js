function solution(num_str) {
    var answer = [...num_str].reduce((acc, cur) => acc+Number(cur), 0);
    return answer;
}