function solution(myString, pat) {
    let reverse = [...myString].reverse().join('')
    let p = [...pat].reverse().join('')
    let i = reverse.indexOf(p)
    return myString.slice(0, myString.length - i);
}