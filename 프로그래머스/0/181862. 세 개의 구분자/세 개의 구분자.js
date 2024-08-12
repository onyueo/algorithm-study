function solution(myStr) {
    var answer = myStr.replaceAll('a', ' ').replaceAll('b', ' ').replaceAll('c', ' ');
    const result = answer.split(' ').filter((str) => str)
    return  result.length === 0 ? ["EMPTY"] : result;
}