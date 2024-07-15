function solution(arr, queries) {
    var answer = [];
    queries.forEach((item)=>{
        let lst = arr.slice(item[0], item[1]+1).filter((el) => (el > item[2])).sort((a, b) => a - b)
        if ( lst.length > 0) {
            answer.push(lst[0])
        } else {
            answer.push(-1)
        }
    })
    return answer;
}