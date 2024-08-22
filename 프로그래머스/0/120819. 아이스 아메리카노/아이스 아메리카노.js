function solution(money) {
    const ans = Math.floor(money / 5500)
    return [ans, money - 5500 * ans];
}