function solution(sequence, k) {
    let x, y = 0
    let maxLen = 1000000000
    let start = 0
    let end = 1
    
    let sum = sequence[0]
    while (end <= sequence.length) {
        if (sum < k) {
            sum += sequence[end]
            end++
        } else if (sum > k) {
            sum -= sequence[start]
            start++
        } else {    // sum === k
            if (maxLen > end-start) {
                maxLen = end - start
                x = start
                y = end - 1
            }
            sum += sequence[end]
            end++
           
        }
    }

    return [x, y];
}
