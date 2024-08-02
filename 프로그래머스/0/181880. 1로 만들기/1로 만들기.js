function solution(num_list) {
    var answer = 0;
    for (num of num_list){
        log = Math.log2(num)
        answer += Math.floor(log)
    }
    return answer;
}