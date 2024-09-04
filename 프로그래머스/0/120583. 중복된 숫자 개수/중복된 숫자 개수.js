function solution(array, n) {
    var answer = 0;
    return array.filter((el) => el === n).length;
}