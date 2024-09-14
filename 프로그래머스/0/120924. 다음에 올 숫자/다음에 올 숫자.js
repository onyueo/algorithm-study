function solution(common) {
    var len = common.length;
    const sum = common[1] - common[0]
    const mul = common[1] / common[0]
    
    if (common[2] - common[1] === sum) {
        return common[len-1] + sum
    } else {
        return common[len-1] * mul
    }
}