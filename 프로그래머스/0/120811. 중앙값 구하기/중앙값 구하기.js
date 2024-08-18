function solution(array) {
    var mid = Math.floor(array.length / 2);
    console.log(array)
    return array.sort((a,b) => a-b)[mid];
}