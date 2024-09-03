function solution(num, k) {
    k = String(k);
    const arr = String(num).split('')
    return arr.includes(k) ? arr.indexOf(k) + 1 : -1;
}