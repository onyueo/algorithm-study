function solution(picture, k) {
    var answer = [];
    for(let pic of picture) {
        let arr = '';
        for (const el of pic) {
            arr += el.repeat(k);
        }

        for (let i = 0; i < k; i++) {
            answer.push(arr);
        }
    }
    return answer;
}