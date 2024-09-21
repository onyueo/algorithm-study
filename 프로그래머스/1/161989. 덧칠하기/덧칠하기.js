function solution(n, m, section) {
    let answer = 0;
    let d = 0;

    for (const num of section) {
        if (num > d) {
            answer++;
            d = num + m - 1;
        }
    }
    
    return answer;
}