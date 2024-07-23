function solution(arr) {
    const start = arr.findIndex((el) => el === 2)
    const end = arr.length - [...arr].reverse().findIndex((el) => el === 2)
    if (arr.includes(2)){
        return arr.slice(start, end); 
    } else {
        return [-1]
    }
}