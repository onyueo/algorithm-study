function solution(keyinput, board) {
    let x = 0;
    let y = 0;

    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);

    for (const key of keyinput) {
        if (key === "left") {
            x = Math.max(x - 1, -maxX);
        } else if (key === "right") {
            x = Math.min(x + 1, maxX);
        } else if (key === "up") {
            y = Math.min(y + 1, maxY);
        } else if (key === "down") {
            y = Math.max(y - 1, -maxY);
        }
    }

    return [x, y];
}