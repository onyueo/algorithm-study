function solution(emergency) {
    var answer = [];
    // console.log([...emergency].sort((a,b) => b-a))
    return emergency.map((el) => [...emergency].sort((a,b) => b-a).indexOf(el)+1);
}