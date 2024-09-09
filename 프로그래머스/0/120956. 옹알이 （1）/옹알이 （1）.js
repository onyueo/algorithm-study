function solution(babbling) {
    const lst = ["aya", "ye", "woo", "ma"]
    var answer = 0;
    for (babb of babbling) {
        let arr = babb
        
        for (const ls of lst) {
            arr = arr.replaceAll(ls, '1');
        }

        if (arr.split('').every(char => char === '1')) {
            answer += 1;
        }
    }
    return answer;
}