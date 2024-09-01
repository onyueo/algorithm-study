function solution(my_string, num1, num2) {
    let arr = my_string.split('')
    const n1 = arr[num1]
    const n2 = arr[num2]
    arr[num2] = n1
    arr[num1] = n2
    return arr.join('');
}