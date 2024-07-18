function solution(intStrs, k, s, l) {
    var answer = intStrs.map((i) => +i.slice(s, s+l)).filter((j)=> j > k);
    
    return answer;
}