function solution(my_string) {
    var answer = 0;
    let num = ''
    for (el of my_string+'Z'){
        if (isNaN(el)) {
            answer += +num
            num = ''
        } else {
            num += el
        }
    }
    return answer;
}