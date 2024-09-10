function solution(before, after) {
    var answer = 0;
    const sorted_be = before.split('').sort().join('')
    const sorted_af = after.split('').sort().join('')

    return sorted_be === sorted_af ? 1 : 0;
}