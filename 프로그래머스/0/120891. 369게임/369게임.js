function solution(order) {
    return [...order.toString()].filter((el) => /[369]/.test(el)).length
}