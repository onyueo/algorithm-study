function solution(my_string) {
    const uniqueChars = new Set(my_string);
    const answer = [...uniqueChars].join('');
    
    return answer;
}