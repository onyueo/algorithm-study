function solution(A, B) {
    let arr = A.split('')
    if (A === B) return 0
    for (let i=0; i<=arr.length; i++) {
        let left = arr.pop()
        arr.unshift(left)
        console.log(arr.join(''), B)
        if (arr.join('') === B) {
            return i + 1
        }
    }
    return -1
}