function solution(arr, k) {
    var answer = [];
    return arr.map((el) => k % 2 === 0 ? el + k : el * k);
}