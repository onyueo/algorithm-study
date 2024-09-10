function solution(i, j, k) {
    var answer = '';
    for (let z=i; z<=j; z++) {
        if (z.toString().includes(k)) {
            answer += z
        }
    }
    return [...answer].filter((el) => +el === k).length;
}