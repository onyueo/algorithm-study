function solution(arr) {
    const row = arr.length
    const col = arr[0].length
    console.log(row, col)
    if (row > col) {
        for (ar of arr) {
            for (let i=0; i<row-col; i++){
                ar.push(0)
            }
        }
    } else if (col > row) {
        for (let j=0; j<col-row; j++){
            arr.push([...Array(col).fill(0)])
        }
    }
    return arr;
}