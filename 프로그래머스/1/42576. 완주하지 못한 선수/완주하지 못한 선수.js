function solution(participant, completion) {
    var answer = '';
    const hihi = {}
    
    for (let ppl of participant) {
        hihi[ppl] ? hihi[ppl] += 1 : hihi[ppl] = 1
    }
    for (let j of completion) {
        hihi[j] -= 1
    }
    for (let ppl of participant) {
        if (hihi[ppl] > 0) {
            return ppl
        }
    }
}