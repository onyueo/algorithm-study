function solution(quiz) {
    var answer = [];
    for (qz of quiz) {
        let [X, op, Y, eq, Z] = [...qz.split(' ')]
        if (op === '-') {
            if (X - Y === +Z) {
                answer.push('O')
            } else {
                answer.push('X')
            }
        } else {
           if (+X + +Y === +Z) {
                answer.push('O')
            } else {
                answer.push('X')
            } 
        }    
    }
    return answer;
}