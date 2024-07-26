function solution(todo_list, finished) {
    var answer = [];
    var test = finished.filter((el, i) => el ? '' : answer.push(todo_list[i]));
    return answer;
}