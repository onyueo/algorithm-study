function solution(array) {
    return array.map((el) => [...el.toString()].filter((a) => a==='7').length).reduce((arr,cur) => arr+cur,0);
}