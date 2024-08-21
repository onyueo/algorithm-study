function solution(n) {
    return [...Array(n+1).keys()].filter((arr) => arr % 2 === 1);
}