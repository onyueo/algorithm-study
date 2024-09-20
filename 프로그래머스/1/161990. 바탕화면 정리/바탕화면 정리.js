function solution(wallpaper) {
    var row = [];
    var col = [];
    
    for (let i=0; i<wallpaper.length; i++) {
        for (let j=0; j<wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                row.push(i)
                col.push(j)
            }
        }
    }
    return [Math.min(...row), Math.min(...col), Math.max(...row)+1, Math.max(...col)+1];
}