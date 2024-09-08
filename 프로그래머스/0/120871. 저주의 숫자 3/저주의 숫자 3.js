function solution(n) {
    var answer = 0;
    let i = 1;
    while(answer !== n) {
        if (!i.toString().includes(3) && i % 3 !== 0) {
            answer += 1
        }
        i++
    }

    return i - 1;
}