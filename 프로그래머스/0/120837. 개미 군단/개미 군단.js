function solution(hp) {
    var answer = 0;
    while(hp !== 0) {
        if(hp - 5 >= 0) {
            hp -= 5
            answer++
        } else if(hp - 3 >= 0) {
            hp -= 3
            answer++
        } else {
            hp -= 1
            answer++
        }
    }
    return answer;
}