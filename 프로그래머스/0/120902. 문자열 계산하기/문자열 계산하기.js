function solution(my_string) {
    let stack = []
    let op = []
    for (str of my_string.split(' ')){
        if (str === '+') {
            op.push('+')
        } else if (str === '-') {
            op.push('-')
        } else {
            stack.push(Number(str))
        }
    }
    
    let ans = stack.shift()
    
    for (let i=0; i<stack.length; i++){
        let cal = op[i]
        if (cal === '+') {
            ans += stack[i]
        } else {
            ans -= stack[i]
        }
    }
    return ans
}