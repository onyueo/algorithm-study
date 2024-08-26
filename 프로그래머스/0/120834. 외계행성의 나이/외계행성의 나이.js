function solution(age) {
    return [...String(age)].map((el) => String.fromCharCode(97 + Number(el))).join('');
}