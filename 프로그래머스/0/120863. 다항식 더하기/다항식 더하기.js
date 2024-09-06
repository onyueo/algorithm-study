function solution(polynomial) {
    var ans = 0;
    let x = polynomial.split(' ').filter((el) => el.includes('x'))
    let c = polynomial.split(' ').filter((el) => !el.includes('x') && !el.includes('+'))
    for (num of x) {
        if (num === 'x') {
            ans += 1
        } else {
            ans += Number(num.replace('x', ''))
        }
    }

    c = c.reduce((arr, cur) => arr + +cur, 0)
    if (c === 0) {
        if (ans === 1) {
            return 'x'
        } else {
            return ans+'x'
        }
    } else if (ans === 0) {
        return String(c)
    } else if (c === 0 && ans === 0){
        return '0'
    } else {
        if (ans === 1) {
            return 'x + '+ c
        } else {
            return ans +'x'+' + '+ c
        }
    }
}