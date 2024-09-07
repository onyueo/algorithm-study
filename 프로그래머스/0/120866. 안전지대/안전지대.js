function solution(board) {
    var answer = 0;
    const len = board.length
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1], [1,1], [1,-1], [-1,1], [-1,-1]]
    for (let i=0; i<len; i++) {
        for (let j=0; j<len; j++) {
            if (board[i][j] === 1) {
                for (const [x, y] of dir) {
                    const newX = i + x;
                    const newY = j + y;

                    if (newX >= 0 && newX < len && newY >= 0 && newY < len && board[newX][newY] === 0) {
                        board[newX][newY] = 3;
                        
                    }
                }
            }
        }
    }

    for (let k=0; k<len; k++) {
        console.log(board[k])
        answer += board[k].filter((el) => el === 0).length
    }
    return answer;
}