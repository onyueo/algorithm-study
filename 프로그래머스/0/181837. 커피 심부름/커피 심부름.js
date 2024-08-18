function solution(order) {
    var answer = 0;
    for (drink of order){
        if (drink.includes('latte')){
            answer += 5000
        } else {
            answer += 4500
        }
    }
    return answer;
}