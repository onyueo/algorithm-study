function solution(my_string) {
    var answer = 0;
    return [...my_string].filter((el) => !isNaN(el)).map(Number).reduce((acc, cur) => acc + cur, 0);
}