function solution(numbers) {
    var answer = 0;
    const lst = [...numbers].sort((a,b) => b - a)
    const rev = [...numbers].sort((a,b) => a - b)
    return Math.max(lst[0]*lst[1], rev[0]*rev[1]);
}