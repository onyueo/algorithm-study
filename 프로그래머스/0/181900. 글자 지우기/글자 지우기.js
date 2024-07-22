function solution(my_string, indices) {
    var answer = [...my_string].filter((el, i) => !indices.includes(i)).join('')
    return answer;
}