function solution(array) {
    let set = new Set(array)
    let newset = [...set].map((arr) => [arr, array.filter((ar) => ar === arr).length])
    newset.sort((a, b) => b[1] - a[1])
    
    if (newset.length > 1) {
        if (newset[0][1] === newset[1][1]) {
            return -1
        } else {
            return newset[0][0]
        }
    } else {
        return newset[0][0]
    }
}