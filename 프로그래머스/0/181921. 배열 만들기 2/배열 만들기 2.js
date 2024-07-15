function solution(l, r) {
    let answer = ['5']
    let lst = ['5']
    const len = r.toString().length
    for (i= 0 ; i < len; i++){
        let a = lst.map((item) => item + '0')
        let b = lst.map((item) => item + '5')
        lst = [...a, ...b]
        answer.push(...lst)
    }
    answer = answer.map(Number).filter((el) => el >= l && el <= r).sort((a,b) => a-b)
    if (answer.length <= 0) {
        return [-1]
    }
    return answer;
}