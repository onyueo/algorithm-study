function solution(my_string) {
    var answer = [];
    return [...my_string].filter((el) => el >= 0 && el <= 9).map(Number).sort((a,b) => a-b);
}