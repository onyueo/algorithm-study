function solution(my_string) {
    var answer = [];
    for (let i=65; i <= 90; i++) {
        let count = [...my_string].filter(el => String.fromCharCode(i) === el).length;
        answer.push(count)
    }
    for (let i=97; i <= 122; i++) {
        let count = [...my_string].filter(el => String.fromCharCode(i) === el).length;
        answer.push(count)
    }
    console.log(answer)
    return answer;
}