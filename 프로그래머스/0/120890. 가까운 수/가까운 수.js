function solution(array, n) {
    let diff = 100000;
    var answer = 0;
    array.sort((a,b) => a-b)
    for (arr of array) {
        if (diff > Math.abs(arr - n)) {
            diff = Math.abs(arr - n)
            answer = arr
        }
    }
    return answer;
}