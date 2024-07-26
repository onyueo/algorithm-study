function solution(str_list) {
    var answer = [];
    const l = str_list.findIndex((el) => el === 'l');
    const r = str_list.findIndex((el) => el === 'r');

    if (l === -1 && r === -1) {
        return answer;
    }

    if (l !== -1 && (r === -1 || l < r)) {
        return str_list.slice(0, l);
    }

    if (r !== -1 && (l === -1 || r < l)) {
        return str_list.slice(r + 1);
    }

    return answer;
}