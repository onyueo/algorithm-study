function solution(arr, k) {
    var answer = [];
    // for (let i=0; i<arr.length; i++){
    //     if (!answer.includes(arr[i])){
    //         answer.push(arr[i])
    //     }
    // }
    const set = [...new Set(arr)]
    if (set.length > k) {
        return set.slice(0, k)
    } else {
        return [...set, ...Array(k-set.length).fill(-1)]
    }
    return answer;
}