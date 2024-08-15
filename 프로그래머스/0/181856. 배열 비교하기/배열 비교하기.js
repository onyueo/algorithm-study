function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        if (arr1.length > arr2.length) {
            return 1
        } else {
            return -1
        }
    } else {
        let sum1 = arr1.reduce((acc, cur) => acc+cur, 0)
        let sum2 = arr2.reduce((acc, cur) => acc+cur, 0)
        if (sum1 > sum2){
            return 1
        } else if (sum1 === sum2){
            return 0
        } else {
            return -1
        }
    }
}