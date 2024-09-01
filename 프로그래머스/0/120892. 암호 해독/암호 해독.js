function solution(cipher, code) {
    var answer = '';
    return [...cipher.toString()].filter((el, i) => (i+1) % code === 0).join('');
}