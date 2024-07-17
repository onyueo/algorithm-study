function solution(my_string, index_list) {
    var answer = index_list.map((i)=>my_string[i]).join('')
    return answer;
}