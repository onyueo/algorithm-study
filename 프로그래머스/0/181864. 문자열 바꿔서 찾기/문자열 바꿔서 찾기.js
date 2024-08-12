function solution(myString, pat) {
    var answer = myString.replaceAll('A', 'C').replaceAll('B', 'A').replaceAll('C', 'B');
    
    return answer.includes(pat) ? 1 : 0;
}