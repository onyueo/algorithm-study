function solution(arr, n) {
    var answer = [];
    if (arr.length % 2 === 0) {
        return arr.map((ar, i) => i % 2 === 1 ? ar + n : ar)
    } else {
        return arr.map((ar, i) => i % 2 === 0 ? ar + n : ar)
    }
}