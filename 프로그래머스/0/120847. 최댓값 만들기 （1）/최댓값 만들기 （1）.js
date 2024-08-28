function solution(numbers) {
    numbers.sort((a,b) => a-b)
    const num1 = numbers.pop()
    const num2 = numbers.pop()
    return num1 * num2;
}