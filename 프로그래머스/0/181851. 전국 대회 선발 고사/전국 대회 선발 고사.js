function solution(rank, attendance) {
    var answer = rank.filter((ar, i) => attendance[i]);
    let [a, b, c] = answer.sort((a, b) => a - b).slice(0, 3)
    return 10000*rank.findIndex((arr) => arr === a) + 100*rank.findIndex((arr) => arr === b) + rank.findIndex((arr) => arr === c);
}